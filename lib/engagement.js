class Engagement {
  constructor(client) {
    this.client = client
  }

  get(options) {
    return this.client._request({
      method: 'GET',
      path: '/engagements/v1/engagements/paged',
      qs: options,
    })
  }

  getRecentlyModified(options) {
    return this.client._request({
      method: 'GET',
      path: '/engagements/v1/engagements/recent/modified',
      qs: options,
    })
  }

  getAssociated(objectType, objectId, options) {
    return this.client._request({
      method: 'GET',
      path:
        '/engagements/v1/engagements/associated/' +
        objectType +
        '/' +
        objectId +
        '/paged',
      qs: options,
    })
  }

  create(data) {
    return this.client._request({
      method: 'POST',
      path: '/engagements/v1/engagements',
      body: data,
    })
  }


  update(id, data) {
    return this.client._request({
      method: 'PATCH',
      path: '/engagements/v1/engagements/' + id,
      body: data,
    })
  }

  delete(id) {
    return this.client._request({
      method: 'DELETE',
      path: '/engagements/v1/engagements/' + id
    })
  }

  associationToContact(contactId, engagementId) {
    let data = new Object();
    data.fromObjectId = engagementId;
    data.toObjectId = contactId;
    data.category = "HUBSPOT_DEFINED";
    data.definitionId = 10
    return this.client._request({
      method : 'PUT',
      path : '/crm-associations/v1/associations',
      body : data
    })
  }

  deleteAssociationToContact(contactId, engagementId) {
    let data = new Object();
    data.fromObjectId = engagementId;
    data.toObjectId = contactId;
    data.category = "HUBSPOT_DEFINED";
    data.definitionId = 10
    return this.client._request({
      method : 'PUT',
      path : '/crm-associations/v1/associations/delete',
      body : data
    })
  }

  getCallDispositions() {
    return this.client._request({
      method: 'GET',
      path: '/calling/v1/dispositions',
    })
  }
}

module.exports = Engagement
