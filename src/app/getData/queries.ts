export const GET_HOME = `
query MyQuery {
  homes {
    title
    heroImage {
      alt
      image {
        url
      }
    }
    heroText {
      firstLine
      secondLine
      thirdLine
      fourthLine
    }
    whoamiSection {
      sectionRef
      text
      sectionBg {
        url
      }
    }
    whoamiParagraph
    carousel {
      ... on Carousel {
        id
        carouselImage {
          ... on Image {
            id
            alt
            text
            image {
              id
              url
            }
          }
        }
      }
    }
    stackSection {
      sectionRef
      text
      sectionColor
    }
    portfolioSection {
      sectionRef
      text
      sectionColor
      sectionBg {
        url
      }
    }
    portfolioCard {
      cardImage {
        alt
        image {
          url
        }
      }
      cardType
      cardName
      cardDescription
      cardLink
      cardStickers
    }
    footer {
      footerSection {
        sectionRef
        text
      }
      elements {
        icon
        text
        href
      }
      copyright {
        text
      }
    }
  }
}
`  