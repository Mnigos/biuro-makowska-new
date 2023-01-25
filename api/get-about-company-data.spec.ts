import { beforeEach, describe, vi, test, expect } from 'vitest'

import { getAboutCompanyData } from '.'

describe('API - GetAboutCompanyData', () => {
  const data = {
    header: 'About Company',
    content: 'Some single type content',
  }

  beforeEach(() => {
    vi.stubGlobal(
      'GqlAboutCompany',
      vi.fn().mockResolvedValue({
        aboutCompany: {
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
    const receivedData = await getAboutCompanyData()

    expect(receivedData).toEqual(data)
  })

  test('should throw error', async () => {
    vi.stubGlobal('GqlAboutCompany', vi.fn().mockRejectedValue('Error'))

    await expect(getAboutCompanyData()).rejects.toThrow(
      'api/getAboutCompanyData: Error'
    )
  })
})
