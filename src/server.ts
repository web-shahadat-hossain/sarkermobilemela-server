import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database Connected ')
    app.listen(config.port, () => {
      console.log(`Example server listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`Fail to database connect `)
  }
}
main().catch(err => console.log(err))
