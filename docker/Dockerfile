FROM node:18.14.2 AS builder
WORKDIR /app
RUN git clone https://github.com/PapillonApp/papillon-nuxt /app
RUN npm install && npm run build
FROM node:18.14.2-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]