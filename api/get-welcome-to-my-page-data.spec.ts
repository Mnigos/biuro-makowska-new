import { beforeEach, describe, vi, test, expect } from 'vitest'

import { getWelcomeToMyPageData } from '.'

describe('API - GetWelcomeToMyPageData', () => {
  const data = {
    header: 'About Company',
    content: 'Some single type content',
  }

  beforeEach(() => {
    vi.stubGlobal(
      'GqlWelcomeToMyPage',
      vi.fn().mockResolvedValue({
        welcomeToMyPage: {
          data: {
            attributes: {
              data,
            },
          },
        },
      })
    )
  })

  test('should get data with success', async () => {
    const receivedData = await getWelcomeToMyPageData()

    expect(receivedData).toEqual(data)
  })

  test('should throw error', async () => {
    vi.stubGlobal('GqlWelcomeToMyPage', vi.fn().mockRejectedValue('Error'))

    await expect(getWelcomeToMyPageData()).rejects.toThrow(
      'api/getWelcomeToMyPageData: Error'
    )
  })
})
