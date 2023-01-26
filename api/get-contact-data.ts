export async function getContactData() {
  try {
    const { contact } = await GqlContact()

    return {
      facebookLink: contact?.data?.attributes?.facebookLink,
      email: contact?.data?.attributes?.email,
      phone: contact?.data?.attributes?.phone,
    }
  } catch (error) {
    throw new Error(`api/getContactData: ${error}`)
  }
}
