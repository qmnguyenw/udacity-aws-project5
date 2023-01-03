import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import 'source-map-support/register'
import { updateAttachmentUrl } from '../../businessLogic/todos'
import { AttachmentUtils } from '../../fileStorage/attachmentUtils'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../utils'

const attUtils = new AttachmentUtils()
const logger = createLogger('deleteLambdaFunction')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Processing Event ', event)
    // TODO: Implement delete attachment in TODO item
    const userId = getUserId(event)
    const todoId = event.pathParameters.todoId
    const deleted = await attUtils.deleteAttachment(todoId)
    logger.info('todoId got: ' + todoId)
    logger.info('Delete result ' + JSON.stringify(deleted))

    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    await updateAttachmentUrl(userId, todoId, '')
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify('Deleted')
    }
  }
)

handler.use(
  cors({
    credentials: true
  })
)
