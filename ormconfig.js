const config = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  logging: true,
  synchronize: true,
  entities: ['src/model.js'],
}

module.exports = config
