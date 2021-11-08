
export interface User {
  country?: string,
  display_name: string,
  email?: string,
  explicit_content?: Exp,
  external_urls?: Ext,
  followers: Followers,
  href: string,
  id: string,
  images: Images[],
  product?: string,
  type?: string,
  uri?: string
}

interface Images {
  height?: number,
  url: string,
  width?: number
}

interface Followers {
  href?: string,
  total: 0
}

interface Ext {
  spotify: string
}

interface Exp {
  filter_enabled?: boolean,
  filter_locked?: boolean
}

export interface Playlists {
  collaborative?: boolean,
  description?: string,
  external_urls?: Ext,
  href?: string,
  id: string,
  images: Images[],
  name: string,
  owner: Owner,
  primary_color?: string,
  public?: boolean,
  snapshot_id?: string,
  tracks: Tracks,
  type?: string,
  uri?: string
}

interface Owner {
  display_name: string,
  external_urls: Ext,
  href: string,
  id: string,
  type: string,
  uri: string,
}

interface Tracks {
  href: string,
  total: number
}
