module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AKIAUGZ6N7NUHE4RR5HZ"),
        secretAccessKey: env("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"),
        region: env("ap-south-1"),
        params: {
          Bucket: env("wanderrides-content"),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
  },
});
