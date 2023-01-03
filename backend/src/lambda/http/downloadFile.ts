import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import 'source-map-support/register'
import { AttachmentUtils } from '../../fileStorage/attachmentUtils'

const attUtils = new AttachmentUtils()

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Processing Event ', event)
    // TODO: Implement download attachment in TODO item
    const atttachmentUrl = event.pathParameters.attachmentUrl

    if (atttachmentUrl != null) {
      const downloadLink = await attUtils.getAttachmentDownloadLink(
        atttachmentUrl
      )
      // Send attachment file to user
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(downloadLink)
      }
    } else {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: 'Cannot download file'
      }
    }
  }
)

handler.use(
  cors({
    credentials: true
  })
)
