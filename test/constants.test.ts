import fs from 'fs'
import path from 'path'
import { keccak256 } from '@ethersproject/solidity'

const INIT_CODE_HASH = '0x60fde00cc6dd7fb1219dd7545ded4a243a8688296ebccfabef6acdae4d158a2c'

const bytecode = fs.readFileSync(path.join(__dirname, './bytecode'), 'utf8')

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
