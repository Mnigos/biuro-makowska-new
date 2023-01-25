export async function getWelcomeToMyPageData() {
  try {
    const { welcomeToMyPage } = await GqlWelcomeToMyPage()

    return {
      header: welcomeToMyPage?.data?.attributes?.data?.header,
      content: welcomeToMyPage?.data?.attributes?.data?.content,
    }
  } catch (error) {
    throw new Error(`api/getWelcomeToMyPageData: ${error}`)
  }
}
