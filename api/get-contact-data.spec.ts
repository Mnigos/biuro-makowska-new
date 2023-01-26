import { beforeEach, describe, vi, test, expect } from 'vitest'

import { getContactData } from '.'

describe('API - GetContactData', () => {
  const attributes = {
    email: 'example@email.com',
    phone: '123456789',
    facebookLink: 'https://www.facebook.com/example',
  }

  beforeEach(() => {
    vi.stubGlobal(
      'GqlContact',
      vi.fn().mockResolvedValue({
        contact: {
          data: {
            attributes,
          },
        },
      })
    )
  })

  test('should get data with success', async () => {
    const receivedData = await getContactData()

    expect(receivedData).toEqual(attributes)
  })

  test('should throw error', async () => {
    vi.stubGlobal('GqlContact', vi.fn().mockRejectedValue('Error'))

    await expect(getContactData()).rejects.toThrow('api/getContactData: Error')
  })
})
