import { ContactData } from '~/types'

export async function getContactData(): Promise<ContactData> {
  try {
    const { contact } = await GqlContact()

    return {
      facebookLink: contact?.data?.attributes?.facebookLink ?? undefined,
      email: contact?.data?.attributes?.email ?? undefined,
      phone: contact?.data?.attributes?.phone ?? undefined,
    }
  } catch (error) {
    throw new Error(`api/getContactData: ${error}`)
  }
}
