import * as React from 'react'

import { SocialMediaContainer, Button, Link } from './styles'

export default function SocialMedia() {
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
