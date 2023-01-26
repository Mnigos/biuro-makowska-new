import { LandingPageDataComponent } from '~/types'

export async function getWelcomeToMyPageData(): Promise<LandingPageDataComponent> {
  try {
    const { welcomeToMyPage } = await GqlWelcomeToMyPage()

    return {
      header: welcomeToMyPage?.data?.attributes?.data?.header ?? undefined,
      content: welcomeToMyPage?.data?.attributes?.data?.content ?? undefined,
    }
  } catch (error) {
    throw new Error(`api/getWelcomeToMyPageData: ${error}`)
  }
}
