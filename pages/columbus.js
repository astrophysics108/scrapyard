/*
Note: To test your changes locally use `yarn dev` and http://localhost:3000/columbus
*/

import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { transform } from 'motion'

const schedule = [
  { time: '10:00 AM', event: 'DOORS OPEN/BREAKFAST' },
  { time: '10:30 AM', event: 'OPENING CEREMONY' },
  { time: '11:00 AM', event: 'HACKING STARTS' },
  { time: '11:00 AM', event: 'TEAM FORMATION' },
  { time: '11:00 AM', event: 'STARTER WORKSHOP*' },
  { time: '12:30 PM', event: 'CYBERSECURITY WORKSHOP*' },
  { time: '1:00 PM', event: 'LUNCH!' },
  { time: '2:00 PM', event: 'STARTER WORKSHOP CONTINUES*' },
  { time: '3:30 PM', event: 'DATA SCIENCE WORKSHOP*' },
  { time: '4:00 PM', event: 'SURPRISE EVENT & SNACKS' },
  { time: '6:00 PM', event: 'CLOSING FOR THE DAY' }
]

const scheduleday2 = [
  { time: '10:00 AM', event: 'DOORS OPEN/BREAKFAST' },
  { time: '10:15 AM', event: 'SUNDAY MORNING CHECK-IN' },
  { time: '10:30 AM', event: 'FINAL HACKING BLOCK' },
  { time: '11:00 AM', event: 'SMART FACTORY TALK*' },  
  { time: '12:00 PM', event: 'PROJECT SUBMISSION MASTERCLASS' },
  { time: '1:00 PM', event: 'LUNCH!' },
  { time: '2:00 PM', event: 'PROJECT DUE & HACKING ENDS' },
  { time: '2:15 PM', event: 'PROJECT EXPO AND VOTING' },
  { time: '3:00 PM', event: 'CLOSING CEREMONY & AWARDS' },
  { time: '4:00 PM', event: 'SCRAPYARD ENDS' }
]

const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Flag = () => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{ position: 'absolute', top: 4, left: 0, zIndex: 2 }}
  >
    <Image
      src="/elements/orpheus-flag.svg"
      alt="Hack Club flag"
      sx={{
        width: [120, 128, 180],
        transformOrigin: '0% 0%',
        transition: 'transform 0.1s',
        ':hover': {
          transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)'
        }
      }}
    />
  </Link>
)

export default function Columbus() {
  const [diamondSponsors, setDiamondSponsors] = useState([])
  const [goldSponsors, setGoldSponsors] = useState([])
  const [silverSponsors, setSilverSponsors] = useState([])
  const [partners, setPartners] = useState([])

  useEffect(() => {
    async function fetchDiamondSponsors() {
      try {
        const response = await fetch(
          'https://MeghanaM4.github.io/scrapyardCMH-data/diamond.json?t=' +
            Date.now()
        )
        const data = await response.json()
        setDiamondSponsors(data)
      } catch (error) {
        setDiamondSponsors([])
      }
    }

    fetchDiamondSponsors()
  }, [])

  useEffect(() => {
    async function fetchGoldSponsors() {
      try {
        const response = await fetch(
          'https://MeghanaM4.github.io/scrapyardCMH-data/gold.json?t=' +
            Date.now()
        )
        const data = await response.json()
        setGoldSponsors(data)
      } catch (error) {
        setGoldSponsors([])
      }
    }

    fetchGoldSponsors()
  }, [])

  useEffect(() => {
    async function fetchSilverSponsors() {
      try {
        const response = await fetch(
          'https://MeghanaM4.github.io/scrapyardCMH-data/silver.json?t=' +
            Date.now()
        )
        const data = await response.json()
        setSilverSponsors(data)
      } catch (error) {
        setSilverSponsors([])
      }
    }

    fetchSilverSponsors()
  }, [])

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await fetch(
          'https://meghanam4.github.io/scrapyardCMH-data/partner.json?t=' +
            Date.now()
        )
        const data = await response.json()
        setPartners(data)
      } catch (error) {
        setPartners([])
      }
    }

    fetchPartners()
  }, [])
  return (
    <Box
      sx={{
        background:
          "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
        backgroundSize: ['1100px', '1100px', '1100px', 'contain'],
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <Head>
        {/* TODO: Change Columbus to your event's city */}
        <title>Scrapyard Columbus</title>
      </Head>
      <Flag />
      <Box
        sx={{
          width: '100%',
          height: ['80vh', '80vh', '90vh'],
          bg: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Image
            sx={{
              width: '600px',

              maxWidth: '70vw',

              objectFit: 'contain'
            }}
            src="/elements/wordmark.svg"
            alt="Scrapyard"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              background: "url('/elements/ripped-paper.png')",
              backgroundSize: 'cover',
              // aspectRatio: "1080/338.4",
              // padding: "8%",
              // paddingLeft: "7%",
              display: 'block',

              width: 'min(500px, calc(100vw - 30px))',
              filter: 'drop-shadow(5px 5px 5px #000000AA)',
              position: 'relative',
              zIndex: 20
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%'
              }}
            >
              Build stupid stuff, get stupid prizes.
            </Heading>
          </Box>
          <Box
            sx={{
              zIndex: 1,
              width: 'max-content',
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '75%',
              position: 'relative',
              zIndex: 30,
              top: '-15%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              Columbus, OH - March&nbsp;15-16
            </Heading>

            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              PAST Foundation - 1003 Kinnear Rd
            </Heading>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100vw'
          }}
        >
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '50%',
              left: '10%'
            }}
            src="/elements/stars/blue.png"
            alt="Blue paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '55%',
              right: '15%'
            }}
            src="/elements/stars/yellow.png"
            alt="Yellow paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '70%',
              left: '20%',
              transform: 'rotate(180deg)'
            }}
            src="/elements/stars/pink.png"
            alt="Pink paper star"
          />
        </Box>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=columbus"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: 'fixed',
              right: ['2%'],
              top: ['4%'],
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 30,
              minWidth: '8em',
              padding: '15px'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                padding: ['2%', '8%'],
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                width: '100%'
              }}
            >
              SIGN&nbsp;UP
            </Heading>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: "url('/elements/paper-top.png')",
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          height: '23vw'
        }}
      >
        <img
          src="/elements/trash-can.png"
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '65vw',
            transform: 'translateY(-20%)',
            zIndex: 7
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          // background: "linear-gradient(#F5F5F5, #F2F2F2)",
          background: 'url(/backgrounds/ripped-paper.png)',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          pt: 6,
          px: 4,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Image src="/elements/orpheus-doodle.svg" />
          <Box
            sx={{
              maxWidth: ['80vw', '60vw', '40vw'],
              padding: '40px',
              zIndex: 1,
              backgroundImage: 'url(/elements/sticky-note.svg)',
              backgroundSize: 'cover',
              filter: 'drop-shadow(5px 5px 5px #000000AA)'
            }}
          >
            <Heading
              sx={{
                textDecoration: 'underline'
              }}
            >
              What is Scrapyard?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              Scrapyard is The Most Useless Invention competition, happening in
              Columbus. Make the stupidest things you can think of and win
              awesome stuff. Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those useless ideas you thought of lying in bed, Scrapyard
              Columbus needs you and your jank inventions!
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            display: ['none', 'none', 'block']
          }}
        >
          <Image
            src="/elements/doodles/arrow.svg"
            sx={{ position: 'absolute', left: '5%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/pinkcircle.svg"
            sx={{ position: 'absolute', left: '20%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/yellowcircle.svg"
            sx={{ position: 'absolute', left: '8%', top: '70%' }}
          />
          <Image
            src="/elements/doodles/bluesquiggle.svg"
            sx={{ position: 'absolute', left: '8%', top: '84%' }}
          />
          <Image
            src="/elements/doodles/yellowlines.svg"
            sx={{ position: 'absolute', left: '37%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluecircle.svg"
            sx={{ position: 'absolute', right: '30%', top: '78%' }}
          />
          <Image
            src="/elements/doodles/pinksquiggle.svg"
            sx={{ position: 'absolute', right: '10%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluedrops.svg"
            sx={{ position: 'absolute', right: '10%', top: '0%' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100vw',
          background: "url('/backgrounds/ripped-paper-bottom.png')",
          backgroundSize: 'cover',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          height: '17.03212647vw',
          position: 'relative'
        }}
      ></Box>

      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center',
              paddingTop: 15
            }}
          >
            WHAT'S HAPPENING AT SCRAPYARD Columbus?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center',
            paddingTop: 40
          }}
        >
          Scrapyard Columbus is a 2-day event - HERE'S THE SCHEDULE!
        </Heading>

        <Heading
          as="h2"
          sx={{
            fontSize: '1em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center',
            paddingTop: 20
          }}
        >
          (subject to change)
        </Heading>

        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            alignItems: ['center', 'center', 'flex-start'],
            justifyContent: 'center',
            gap: 4,
            width: '100%',
            fontSize: ['1.5em', '1.5em', '1.2em'],
            color: 'black',
            my: 5
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: ['90%', '70%', '45%'],
              background: "url('/backgrounds/lined-paper.png')",
              backgroundSize: ['contain', 'contain', 'cover!important'],
              p: 4,
              borderRadius: 1,
              boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontSize: '1.5em',
                fontFamily: 'moonblossom',
                color: 'black',
                textAlign: 'center',
                paddingBottom: 50
              }}
            >
              Day 1 (SATURDAY)
            </Heading>

            {schedule.map((item, i) => (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}
                key={i}
              >
                <Heading
                  as="p"
                  sx={{
                    display: 'inline',
                    width: ['min-content', 'max-content'],
                    fontSize: '2rem',
                    fontFamily: 'p22-stanyan'
                  }}
                >
                  {item.event}
                </Heading>
                <Box
                  sx={{
                    mx: 2,
                    transform: 'translateY(0.75rem)',
                    borderWidth: 0,
                    borderBottomWidth: '0.35rem',
                    borderStyle: 'dotted',
                    flexGrow: '1',
                    display: 'inline',
                    height: 1
                  }}
                ></Box>
                <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
              </div>
            ))}

            <Heading
              as="h2"
              sx={{
                fontSize: '0.8em',
                fontFamily: 'moonblossom',
                color: 'black',
                textAlign: 'left',
                paddingTop: 20
              }}
            >
              *Optional event
            </Heading>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: ['90%', '70%', '45%'],
              background: "url('/backgrounds/lined-paper.png')",
              backgroundSize: ['contain', 'contain', 'cover!important'],
              p: 4,
              borderRadius: 1,
              boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontSize: '1.5em',
                fontFamily: 'moonblossom',
                color: 'black',
                textAlign: 'center',
                paddingBottom: 50
              }}
            >
              Day 2 (SUNDAY)
            </Heading>

            {scheduleday2.map((item, i) => (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}
                key={i}
              >
                <Heading
                  as="p"
                  sx={{
                    display: 'inline',
                    width: ['min-content', 'max-content'],
                    fontSize: '2rem',
                    fontFamily: 'p22-stanyan'
                  }}
                >
                  {item.event}
                </Heading>
                <Box
                  sx={{
                    mx: 2,
                    transform: 'translateY(0.75rem)',
                    borderWidth: 0,
                    borderBottomWidth: '0.35rem',
                    borderStyle: 'dotted',
                    flexGrow: '1',
                    display: 'inline',
                    height: 1
                  }}
                ></Box>
                <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
              </div>
            ))}
          </Box>
        </Box>

          
          
        <Link
          // TODO: Change [EVENTID] to your event's ID (see https://airtable.com/appigKiF7GbVISAlg/shrK3OiCJs4BRBIRG)
          href="https://forms.hackclub.com/scrapyard-signup?event=reckNLlOx3NFmyOrH"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 20,
              padding: 1,
              marginTop: 1,
              marginBottom: 5
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px']
              }}
            >
              {/* TODO: Change Columbus to your event's city */}
              SIGN UP FOR SCRAPYARD Columbus
            </Heading>
          </Box>
        </Link>


        
      </Box>

      <Box
        sx={{
          background: ["url('/backgrounds/bulletin@vertical.svg')"],
          backgroundSize: 'cover!important',
          display: 'flex',
          paddingY: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          overflow: 'visible',
          gap: '20px',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            backgroundSize: 'cover!important',
            display: 'block',
            width: '30vw',
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center',
              paddingTop: 15
            }}
          >
            {/* TODO: Change Columbus to your event's city */}
            CAN'T MAKE IT TO Columbus?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center',
            mx: '5vw'
          }}
        >
          THERE ARE 100+ OTHER SCRAPYARD EVENTS HAPPENING AROUND THE WORLD!
        </Heading>
        <Box
          sx={{
            width: ['100%', '80%'],
            height: '75vh',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            mb: '10vh',
            mt: 5
          }}
        >
          <Map />
        </Box>
      </Box>





      <Heading
          as="h1"
          sx={{
            mb: 5,
            fontSize: 45,
            position: 'relative',
            left: '33%',
            paddingTop: 70,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}
        >
          Meet your organizers
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '18%',
              transform: 'translateX(-50%) translateY(75%)',
              paddingTop: 10,
              width: '50%'
            }}
          />
        </Heading>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            my: 4
          }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              background: '#F0F0F0',
              border: '2px solid black',
              maxWidth: '24rem',
              rotate: '-1deg',
              boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Image
              src="https://cdn.hack.ngo/slackcdn/4c53ace72bc3e63c75477c87630133c6.webp"
              sx={{
                width: '23rem',
                translate: 'rotate(-0.5deg)',
                mb: 3
              }}
            />
            <Heading as="h3" mb={2}>
              Meghana M. (LEAD)
            </Heading>
            <Text sx={{ textAlign: 'center', fontSize: '2rem' }}>
              Hey, I'm Meghana. I love building awesome things with awesome
              people. See you at Scrapyard!
            </Text>
          </Card>

          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              background: '#F0F0F0',
              border: '2px solid black',
              maxWidth: '24rem',
              rotate: '.5deg',
              boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Image
              src="https://cdn.hack.ngo/slackcdn/1790dcada493521586d206cb96e22d90.webp"
              sx={{
                width: '23rem',
                translate: 'rotate(0.5deg)',
                mb: 3
              }}
            />
            <Heading as="h3" mb={2}>
              Kristen O. (CO-ORGANIZER)
            </Heading>
            <Text sx={{ textAlign: 'center', fontSize: '1.6rem' }}>
              Hello! I’m Kristen, I enjoy making fun websites and meeting new
              people. Fun Fact About Me: I’m a self-taught pianist and bubble
              tea enthusiast. Can’t wait to see you at Scrapyard!
            </Text>
          </Card>

          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              background: '#F0F0F0',
              border: '2px solid black',
              maxWidth: '24rem',
              rotate: '1deg',
              boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Image
              src="https://cdn.hack.ngo/slackcdn/d7aa47bc73b0da6c8b5df085ed21674d.webp"
              sx={{
                width: '23rem',
                mb: 3
              }}
            />
            <Heading as="h3" mb={2}>
              Kieran K.
            </Heading>
            <Text sx={{ textAlign: 'center', mb: 2, fontSize: '1.4rem' }}>
              Erlo! I'm Kieran and i'm secretly a hardware guy at heart :) I
              mostly dabble in software but I'm looking forward to seeing what
              hardware projects we can make together at Scrapyard!
            </Text>
            <Text sx={{ textAlign: 'center' }}>
              (I just helped out with web dev and emailing so not really an
              organizer lol)
            </Text>
          </Card>
        </Box>





        <Box
          sx={{
            width: '100vw',
            // background: [
            //   "url('/backgrounds/bulletin@vertical.svg')",
            //   "url('/backgrounds/bulletin@vertical.svg')",
            //   "url('/backgrounds/bulletin.svg')"
            // ],
            // background: "url('/backgrounds/bulletin@vertical.svg')",
            //background: "url('/backgrounds/lined-paper.png')",
            background: '#337d78',
            backgroundSize: 'cover!important',
            backgroundPosition: 'center center',
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            overflow: 'visible',
            gap: '20px',
            height: ['auto'],
            position: 'relative',
            paddingTop: 120
          }}
          id="sponsors"
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              flexWrap: 'wrap',
              p: '4vw',
              position: 'relative',
              overflow: 'visible',
              justifyContent: ['space-around', 'space-around', null],
              pb: '12vw'
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                height: 'min-content'
              }}
            >
              <Box
                sx={{
                  background: "url('/elements/stapled-paper.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100px',
                  width: '400px'
                }}
              >
                <Heading
                  as="h2"
                  sx={{
                    textAlign: 'center',
                    fontSize: '3em',
                    marginTop: '-10px'
                  }}
                >
                  Sponsors
                </Heading>
              </Box>
            </Box>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '100px',
                marginTop: '50px',
                transform: 'scale(1.1)'
              }}
            >
              <div>
                <Box
                  sx={{
                    backgroundColor: '#d4caa3',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    padding: '20px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    transition: 'transform 0.2s',
                    zIndex: 2,
                    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`
                    }
                  }}
                >
                  <Heading
                    as="h2"
                    sx={{
                      textAlign: 'center',
                      fontSize: '1.5em',
                      fontFamily: 'moonblossom',
                      color: 'white',
                      mt: 2,
                    }}
                  >
                    PARTNERS
                  </Heading>
                </Box>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    // height: '200px',
                    transform: 'scale(0.9)',
                    justifyContent: 'center',
                    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {partners.map((sponsor, i) => (
                    <Link
                      href={sponsor.url}
                      target="_blank"
                      sx={{
                        backgroundColor: '#d4caa3',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '170px',
                        alignItems: 'center',
                        padding: '20px',
                        transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                        outline: 'solid 2px white',
                        boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                        transition: 'transform 0.2s',
                        ':hover': {
                          transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                          zIndex: 1
                        }
                      }}
                    >
                      <Image
                        key={i}
                        src={sponsor.image}
                        alt={sponsor.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain'
                        }}
                      />
                      <Text
                        sx={{
                          textAlign: 'center',
                          fontSize: '1.5em',
                          fontFamily: 'moonblossom',
                          color: 'white',
                          mt: 2,
                          wordWrap: 'break-word'
                        }}
                      >
                        {sponsor.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '13rem',
                marginTop: '12rem'
              }}
            >
              <div
                style={{
                  transform: 'scale(1.5)',
                  opacity:
                    diamondSponsors.length > 0 &&
                    diamondSponsors[0]?.url ===
                      'mailto:columbus@scrapyard.hackclub.com'
                      ? 0.7
                      : 1,
                  filter:
                    diamondSponsors.length > 0 &&
                    diamondSponsors[0]?.url ===
                      'mailto:columbus@scrapyard.hackclub.com'
                      ? 'grayscale(40%)'
                      : 'none'
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#86CEFA',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    padding: '20px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    transition: 'transform 0.2s',
                    zIndex: 2,
                    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`
                    }
                  }}
                >
                  <Heading
                    as="h2"
                    sx={{
                      textAlign: 'center',
                      fontSize: '1em',
                      fontFamily: 'moonblossom',
                      color: 'white'
                    }}
                  >
                    DIAMOND SPONSORS
                  </Heading>
                </Box>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '50px',
                    height: '200px',
                    transform: 'scale(0.7)',
                    justifyContent: 'center',
                    marginTop: -15
                  }}
                >
                  {diamondSponsors.map((sponsor, i) => (
                    <Link
                      href={sponsor.url}
                      target="_blank"
                      sx={{
                        backgroundColor: '#86CEFA',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '12.5rem',
                        alignItems: 'center',
                        padding: '20px',
                        transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                        outline: 'solid 2px white',
                        boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                        transition: 'transform 0.2s',
                        ':hover': {
                          transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                          zIndex: 1
                        }
                      }}
                    >
                      <Image
                        key={i}
                        src={sponsor.image}
                        alt={sponsor.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain'
                        }}
                      />
                      <Text
                        sx={{
                          textAlign: 'center',
                          fontSize: '1.5em',
                          fontFamily: 'moonblossom',
                          color: 'white',
                          mt: 2,
                          wordWrap: 'break-word'
                        }}
                      >
                        {sponsor.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </div>
              <div
                style={{
                  transform: 'scale(1.3)',
                  opacity:
                    goldSponsors.length > 0 &&
                    goldSponsors[0]?.url ===
                      'mailto:columbus@scrapyard.hackclub.com'
                      ? 0.7
                      : 1,
                  filter:
                    goldSponsors.length > 0 &&
                    goldSponsors[0]?.url ===
                      'mailto:columbus@scrapyard.hackclub.com'
                      ? 'grayscale(40%)'
                      : 'none'
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#c9ae53',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    marginTop: '-50px',
                    transition: 'transform 0.2s',
                    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                    zIndex: 2,
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`
                    }
                  }}
                >
                  <Heading
                    as="h2"
                    sx={{
                      textAlign: 'center',
                      fontSize: '1.5em',
                      fontFamily: 'moonblossom',
                      color: 'white',
                      mt: 2
                    }}
                  >
                    GOLD SPONSORS
                  </Heading>
                </Box>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    // height: '200px',
                    transform: 'scale(0.9)',
                    justifyContent: 'center',
                    marginTop: 10
                  }}
                >
                  {goldSponsors.map((sponsor, i) => (
                    <Link
                      href={sponsor.url}
                      target="_blank"
                      sx={{
                        backgroundColor: '#c9ae53',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '200px',
                        alignItems: 'center',
                        padding: '20px',
                        transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                        outline: 'solid 2px white',
                        boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)', 
                        transition: 'transform 0.2s',
                        ':hover': {
                          transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                          zIndex: 1
                        }
                      }}
                    >
                      <Image
                        key={i}
                        src={sponsor.image}
                        alt={sponsor.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain'
                        }}
                      />
                      <Text
                        sx={{
                          textAlign: 'center',
                          fontSize: '1.5em',
                          fontFamily: 'moonblossom',
                          color: 'white',
                          mt: 2,
                          wordWrap: 'break-word'
                        }}
                      >
                        {sponsor.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </div>
              <div
                style={{
                  marginBottom: '-130px',
                  transform: 'scale(1.1)',
                  opacity:
                    silverSponsors.length > 0 &&
                    silverSponsors[0]?.url ===
                      'mailto:columbus@scrapyard.hackclub.com'
                      ? 0.7
                      : 1,
                  filter:
                    silverSponsors.length > 0 &&
                    silverSponsors[0]?.url ===
                      'mailto:columbus@scrapyard.hackclub.com'
                      ? 'grayscale(40%)'
                      : 'none'
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#c7c7c7',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    marginTop: '-50px',
                    transition: 'transform 0.2s',
                    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                      zIndex: 1
                    }
                  }}
                >
                  <Heading
                    as="h2"
                    sx={{
                      textAlign: 'center',
                      fontSize: '1.5em',
                      fontFamily: 'moonblossom',
                      color: 'white',
                      mt: 2
                    }}
                  >
                    SILVER SPONSORS
                  </Heading>
                </Box>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    // height: '200px',
                    transform: 'scale(0.8)',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}
                >
                  {silverSponsors.map((sponsor, i) => (
                    <Link
                      href={sponsor.url}
                      target="_blank"
                      sx={{
                        backgroundColor: '#c7c7c7',
                        display: 'flex',
                        flexDirection: 'column',
                        width: 170,
                        alignItems: 'center',
                        padding: '20px',
                        transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                        outline: 'solid 2px white',
                        boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)',
                        transition: 'transform 0.2s',
                        ':hover': {
                          transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                          zIndex: 1
                        }
                      }}
                    >
                      <Image
                        key={i}
                        src={sponsor.image}
                        alt={sponsor.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain'
                        }}
                      />
                      <Text
                        sx={{
                          textAlign: 'center',
                          fontSize: '1.5em',
                          fontFamily: 'moonblossom',
                          color: 'white',
                          mt: 2,
                          wordWrap: 'break-word'
                        }}
                      >
                        {sponsor.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Box>




      <Box
        sx={{
          width: '100%',
          background: "url('/backgrounds/lined-paper.png')",
          backgroundSize: ['contain', 'contain', 'cover!important'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          p: [4, 4, 5],
          pt: 6,
          position: 'relative'
        }}
      >
        <Heading
          as="h1"
          sx={{
            mb: 5,
            position: 'relative'
          }}
        >
          Frequently Asked Questions
          <Image
            src="/elements/doodles/blue-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Grid
          columns={[1, 1, 1, 2]}
          gap={4}
          sx={{
            maxWidth: '1200px'
          }}
        >
          {Object.entries({
            'Who can participate in Scrapyard?': (
              <>
                All high-school aged students are welcome, just fill out the{' '}
                <Link href="https://forms.hackclub.com/scrapyard-signup?event=reckNLlOx3NFmyOrH">
                  form
                </Link>
                !
              </>
            ),
            'All this, for free?': (
              <>
                Yep! Food, swag and good vibes are all included. Plus, if you're
                joining us from afar,{' '}
                <Link href="https://gas.hackclub.com/">
                  we'll cover the cost of gas or a bus / train ticket
                </Link>
                .
              </>
            ),
            'What do I need?': (
              <>
                Your laptop, charges, and bad ideas. Actually, you don't even need
                a laptop (if you want one at the event, email us!). 3D printers 
                will be at there and we'll have some Arduino UNOs, breadboards, wires, 
                and sensors to help you make an epic hardware project.
              </>
            ),
            'I dont know how to code. Can I still participate?': (
              <>
                Knowing how to code is NOT required. Whether your Useless
                Invention is on Scratch or Google Docs, you'll still be eligible
                for epic prizes. This hackathon is for all skill levels; even if
                you'll be writing your first line of code we'll have starter
                projects and mentors to help you out.
              </>
            ),
            'What can I make at Scrapyard?': (
              <>
                The most useless thing you can imagine –- jank is encouraged.
                Apps? Games? Websites? We'll have a bunch of resources and
                mentors to help you fulfill your most pointless inventions.
              </>
            ),
            'What has Hack Club done before?': (
              <>
                Hack Club has run an{' '}
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                  overnight hackathon
                </Link>{' '}
                in San Francisco, a{' '}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                  Game Jam
                </Link>{' '}
                across 50 cities, a hackathon on an{' '}
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                  Express Train
                </Link>{' '}
                from Vermont to Los Angeles, and much more!
              </>
            ),
            'My parents are asking...?': (
              <>
                We're here to help! Our parents guide will be released soon, but
                they can reach out to us at{' '}
                <Link href="mailto:columbus@scrapyard.hackclub.com">
                  columbus@scrapyard.hackclub.com
                </Link>{' '}
                for questions.
              </>
            ),
            'I have more questions': (
              <>
                Contact us! Feel free to reach out to us at{' '}
                <Link href="mailto:columbus@scrapyard.hackclub.com">
                  columbus@scrapyard.hackclub.com
                </Link>{' '}
                or in the{' '}
                <Link href="https://hackclub.slack.com/archives/C0866UXSQKX">
                  #scrapyard-columbus
                </Link>{' '}
                on the{' '}
                <Link href="https://hackclub.com/slack/">Hack Club slack</Link>.
              </>
            )
          }).map(([question, answer], i) => {
            return (
              <Card
                key={question}
                sx={{
                  background: [
                    'transparent',
                    `url('/elements/doodles/boxes/${(i % 6) + 1}.svg')`
                  ],
                  backgroundSize: [null, '100% 100%'],
                  backgroundRepeat: 'no-repeat',
                  boxShadow: 'none',
                  padding: '48px!important',
                  border: ['2px solid black', 'none']
                }}
              >
                <Heading
                  as="h2"
                  mb={4}
                  sx={{
                    position: 'relative'
                  }}
                >
                  {question}
                  <Image
                    src="/elements/doodles/yellow-underline.svg"
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(75%)'
                    }}
                  />
                </Heading>
                <Text
                  sx={{
                    fontSize: 3,
                    fontWeight: 'bold'
                  }}
                >
                  {answer}
                </Text>
              </Card>
            )
          })}
        </Grid>


        
        <Heading
          as="h2"
          sx={{
            mt: 3,
            position: 'relative'
          }}
        >
          Scrapyard
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mb: -2,
            textAlign: 'center'
          }}
        >
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mt: 0,
            textAlign: 'center'
          }}
        >
          <Link href="https://hackclub.com">Hack Club</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/slack">Slack</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/clubs">Clubs</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">Hackathons</Link>
        </Text>
      </Box>
    </Box>
  )
}
