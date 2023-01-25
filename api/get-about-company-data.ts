export async function getAboutCompanyData() {
  try {
    const { aboutCompany } = await GqlAboutCompany()

    return {
      header: aboutCompany?.data?.attributes?.data?.header,
      content: aboutCompany?.data?.attributes?.data?.content,
    }
  } catch (error) {
    throw new Error(`api/getAboutCompanyData: ${error}`)
  }
}
