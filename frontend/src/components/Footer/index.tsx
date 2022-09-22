import {
  DiscordLogo,
  GithubLogo,
  IconContext,
  InstagramLogo,
} from 'phosphor-react'
import { FooterContainer, FooterSocialMidia, FooterTextField } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterTextField>
        <strong>
          Doctor<span>Care</span>
        </strong>

        <span>©2022 - Todos os direitos reservados.</span>
        <span>Feito com ♡ pela Panelinha</span>
      </FooterTextField>

      <FooterSocialMidia>
        <IconContext.Provider
          value={{
            color: 'white',
            size: 24,
            mirrored: false,
          }}>
          <a href="https://github.com/Little-Panela" rel="noreferrer noopener">
            <GithubLogo />
          </a>
          <a>
            <DiscordLogo />
          </a>
          <a>
            <InstagramLogo />
          </a>
        </IconContext.Provider>
      </FooterSocialMidia>
    </FooterContainer>
  )
}
