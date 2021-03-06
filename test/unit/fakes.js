const { stub } = require('sinon')

const fakeQueue = () => 'some queue'

const fakeChannel = () => ({
  assertExchange: stub(),
  publish: stub(),
  close: stub(),
  assertQueue: stub(),
  purgeQueue: stub(),
  bindQueue: stub(),
  prefetch: stub(),
  consume: stub(),
  ack: stub(),
  nack: stub()
})

const fakeConnection = () => ({
  createChannel: stub(),
  close: stub()
})

const mockAmqplib = () => ({
  connect: stub()
})

module.exports = {
  fakeQueue,
  fakeChannel,
  fakeConnection,
  mockAmqplib
}
