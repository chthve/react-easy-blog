import * as React from 'react'

import { SocialMediaContainer, Button, Link } from './styles'

export interface SocialMediaProps {}

export default function SocialMedia(props: SocialMediaProps) {
  return (
    <SocialMediaContainer>
      <Button>
        <Link>Like</Link>
      </Button>
      <Button>
        <Link>Share</Link>
      </Button>
      <Button>
        <Link>Tweet</Link>
      </Button>
    </SocialMediaContainer>
  )
}
