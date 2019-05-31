import { RequestPromise } from 'request-promise'

declare class Engagement {
  create(data: {}): RequestPromise

  update(id: number, data: {}): RequestPromise

  associationToContact(contactId: number, engagementId: number): RequestPromise

  deleteAssociationToContact(contactId: number, engagementId: number): RequestPromise

  get(opts?: {}): RequestPromise

  getRecentlyModified(opts?: {}): RequestPromise

  getAssociated(objectType: string, objectId: number, opts?: {}): RequestPromise
}

export { Engagement }
