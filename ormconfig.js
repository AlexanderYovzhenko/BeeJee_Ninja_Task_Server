const config = {
  type: 'postgres',
  url: 'postgres://zmbbijlykgzhzt:bceba28eed69c0bf07bde1a92a7f6040eaf46bf2014ef742e2be8c3ca7cf7ffa@ec2-54-76-105-132.eu-west-1.compute.amazonaws.com:5432/d522gh2mv15d89',
  host: 'ec2-54-76-105-132.eu-west-1.compute.amazonaws.com',
  port: 5432,
  username: 'zmbbijlykgzhzt',
  password: 'bceba28eed69c0bf07bde1a92a7f6040eaf46bf2014ef742e2be8c3ca7cf7ffa',
  database: 'd522gh2mv15d89',
  synchronize: true,
  entities: ['src/model.js'],
  ssl: {
    rejectUnauthorized: false,
  }
}

module.exports = config
