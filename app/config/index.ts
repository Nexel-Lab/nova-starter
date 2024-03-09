export const app = {
  NAME: 'NOVA App',
  VERSION: '2024.3.1001',
  UPDATE_DATE: 'Mar 10, 2024',
  s3: {
    bucketName: process.env.S3_UPLOAD_BUCKET ?? 'nova',
    endpoint: process.env.S3_UPLOAD_ENDPOINT
  }
}

export default { app }
