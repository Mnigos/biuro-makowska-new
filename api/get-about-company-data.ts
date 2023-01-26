import { LandingPageDataComponent } from '~/types'

export async function getAboutCompanyData(): Promise<LandingPageDataComponent> {
  try {
    const { aboutCompany } = await GqlAboutCompany()

    return {
      header: aboutCompany?.data?.attributes?.data?.header ?? undefined,
      content: aboutCompany?.data?.attributes?.data?.content ?? undefined,
    }
  } catch (error) {
    throw new Error(`api/getAboutCompanyData: ${error}`)
  }
}
