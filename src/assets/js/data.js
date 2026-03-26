const artists = [
  {
    id: "pablo-picasso",
    name: "Pablo Picasso",
    years: "1881–1973",
    nationality: "Spanish",
    style: "Cubism, Surrealism",
    bio: "Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
    achievements: [
      "Co-founded the Cubist movement",
      "Revolutionized European painting and sculpture",
      "Created an estimated 50,000 artworks",
      "Pioneered the use of collage in fine art"
    ],
    artworks: [
      {
        title: "Les Demoiselles d'Avignon",
        year: "1907",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg",
        description: "A large oil painting depicting five nude female prostitutes in a brothel on Carrer d'Avinyó in Barcelona."
      },
      {
        title: "Guernica",
        year: "1937",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
        description: "A large oil painting on canvas by Spanish artist Pablo Picasso. It is one of his best-known works."
      },
      {
        title: "The Old Guitarist",
        year: "1903",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg",
        description: "An oil painting by Pablo Picasso, created in late 1903 and early 1904. It depicts an elderly musician."
      }
    ]
  },
  {
    id: "vincent-van-gogh",
    name: "Vincent van Gogh",
    years: "1853–1890",
    nationality: "Dutch",
    style: "Post-Impressionism",
    bio: "Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.",
    achievements: [
      "Influenced the foundations of modern art",
      "Created iconic works like 'The Starry Night'",
      "Mastered the use of bold colors and expressive brushwork",
      "Produced a vast body of work in a short period"
    ],
    artworks: [
      {
        title: "The Starry Night",
        year: "1889",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        description: "One of the most recognized paintings in the history of Western culture, depicting the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence."
      },
      {
        title: "Sunflowers",
        year: "1888",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
        description: "A series of still life paintings of sunflowers by the Dutch painter Vincent van Gogh."
      },
      {
        title: "Bedroom in Arles",
        year: "1888",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
        description: "The title given to each of three similar paintings by 19th-century Dutch Post-Impressionist painter Vincent van Gogh."
      }
    ]
  },
  {
    id: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    years: "1452–1519",
    nationality: "Italian",
    style: "High Renaissance",
    bio: "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology.",
    achievements: [
      "Painted the 'Mona Lisa', the world's most famous portrait",
      "Conceptualized flying machines, armored vehicles, and concentrated solar power",
      "Advanced the study of anatomy and civil engineering",
      "Mastered the technique of sfumato"
    ],
    artworks: [
      {
        title: "Mona Lisa",
        year: "c. 1503–1506",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        description: "A half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance."
      },
      {
        title: "The Last Supper",
        year: "c. 1495–1498",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1280px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
        description: "A late 15th-century mural painting by Italian artist Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan."
      },
      {
        title: "Vitruvian Man",
        year: "c. 1490",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/800px-Da_Vinci_Vitruve_Luc_Viatour.jpg",
        description: "A drawing by the Italian polymath Leonardo da Vinci accompanied by notes based on the work of the Roman architect Vitruvius."
      }
    ]
  },
  {
    id: "claude-monet",
    name: "Claude Monet",
    years: "1840–1926",
    nationality: "French",
    style: "Impressionism",
    bio: "Oscar-Claude Monet was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, particularly in his attempts to paint nature as he perceived it. During his long career, he was the most consistent and prolific practitioner of impressionism's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting.",
    achievements: [
      "Founding father of the Impressionist movement",
      "Mastered the capture of light and natural forms",
      "Created the famous 'Water Lilies' series",
      "Revolutionized plein air painting"
    ],
    artworks: [
      {
        title: "Impression, Sunrise",
        year: "1872",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/1280px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
        description: "The painting that gave the Impressionist movement its name."
      },
      {
        title: "Water Lilies",
        year: "1919",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Claude_Monet_-_Water_Lilies_-_Google_Art_Project_2.jpg/1280px-Claude_Monet_-_Water_Lilies_-_Google_Art_Project_2.jpg",
        description: "One of many paintings in Monet's series of Water Lilies, created in his flower garden at Giverny."
      },
      {
        title: "The Magpie",
        year: "1868",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg",
        description: "One of about 140 snowscapes produced by Monet, showing a magpie perched on a gate in a snow-covered landscape."
      }
    ]
  },
  {
    id: "rembrandt",
    name: "Rembrandt van Rijn",
    years: "1606–1669",
    nationality: "Dutch",
    style: "Dutch Golden Age, Baroque",
    bio: "Rembrandt Harmenszoon van Rijn was a Dutch Golden Age painter, printmaker and draughtsman. An innovative and prolific master in three media, he is generally considered one of the greatest visual artists in the history of art and the most important in Dutch art history.",
    achievements: [
      "Master of light and shadow (chiaroscuro)",
      "Created some of the most profound portraits in history",
      "Revolutionized printmaking through etching",
      "Produced over 300 paintings and 2,000 drawings"
    ],
    artworks: [
      {
        title: "The Night Watch",
        year: "1642",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_P001554.jpg/1280px-The_Night_Watch_-_P001554.jpg",
        description: "Rembrandt's most famous work, known for its colossal size and dramatic use of light."
      },
      {
        title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
        year: "1632",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/1280px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
        description: "An oil painting on canvas by Rembrandt, depicting a group of surgeons during a public dissection."
      },
      {
        title: "Self-Portrait with Two Circles",
        year: "c. 1665–1669",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Rembrandt_Self-Portrait_%28Kenwood_House%29.jpg/800px-Rembrandt_Self-Portrait_%28Kenwood_House%29.jpg",
        description: "One of over 40 self-portraits Rembrandt painted during his career."
      }
    ]
  },
  {
    id: "michelangelo",
    name: "Michelangelo",
    years: "1475–1564",
    nationality: "Italian",
    style: "High Renaissance",
    bio: "Michelangelo di Lodovico Buonarroti Simoni was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence, who exerted an unparalleled influence on the development of Western art.",
    achievements: [
      "Sculpted the 'David' and 'Pieta'",
      "Painted the Sistine Chapel ceiling",
      "Designed the dome of St. Peter's Basilica",
      "Considered the greatest living artist in his lifetime"
    ],
    artworks: [
      {
        title: "David",
        year: "1501–1504",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/David_von_Michelangelo.jpg/800px-David_von_Michelangelo.jpg",
        description: "A masterpiece of Renaissance sculpture, created in marble by the Italian artist Michelangelo."
      },
      {
        title: "The Creation of Adam",
        year: "c. 1508–1512",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
        description: "A fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling."
      },
      {
        title: "The Last Judgment",
        year: "1536–1541",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/800px-Last_Judgement_%28Michelangelo%29.jpg",
        description: "A fresco by the Italian Renaissance painter Michelangelo covering the whole altar wall of the Sistine Chapel."
      }
    ]
  },
  {
    id: "salvador-dali",
    name: "Salvador Dalí",
    years: "1904–1989",
    nationality: "Spanish",
    style: "Surrealism",
    bio: "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquess of Dalí of Púbol was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship and the striking and bizarre images in his work.",
    achievements: [
      "Key figure in the Surrealist movement",
      "Mastered the 'paranoiac-critical method'",
      "Created the iconic 'Persistence of Memory'",
      "Influenced modern film and advertising"
    ],
    artworks: [
      {
        title: "The Persistence of Memory",
        year: "1931",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
        description: "One of the most recognizable works of Surrealism, featuring the melting clocks."
      },
      {
        title: "Swans Reflecting Elephants",
        year: "1937",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Swans_Reflecting_Elephants.jpg",
        description: "A painting that uses the paranoiac-critical method to create a double image."
      },
      {
        title: "The Elephants",
        year: "1948",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Elephants.jpg",
        description: "A recurring motif in Dalí's work, depicting elephants with spindly legs."
      }
    ]
  },
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    years: "1907–1954",
    nationality: "Mexican",
    style: "Naïve Art, Surrealism",
    bio: "Frida Kahlo de Rivera was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
    achievements: [
      "Icon of Mexican identity and feminism",
      "Explored deeply personal themes through art",
      "Integrated Mexican folk culture into fine art",
      "Acclaimed for her unflinching self-portraits"
    ],
    artworks: [
      {
        title: "The Two Fridas",
        year: "1939",
        image: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Two_Fridas.jpg",
        description: "An oil painting by Mexican artist Frida Kahlo, the first large-scale work done by Kahlo and considered one of her most notable paintings."
      },
      {
        title: "Self-Portrait with Thorn Necklace and Hummingbird",
        year: "1940",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg",
        description: "A self-portrait that includes symbolic elements of pain and nature."
      },
      {
        title: "The Broken Column",
        year: "1944",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f3/The_Broken_Column.jpg",
        description: "A painting representing the spiritual and physical suffering of the artist."
      }
    ]
  },
  {
    id: "johannes-vermeer",
    name: "Johannes Vermeer",
    years: "1632–1675",
    nationality: "Dutch",
    style: "Dutch Golden Age",
    bio: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life. During his lifetime, he was a moderately successful provincial genre painter in Delft.",
    achievements: [
      "Master of light and domestic realism",
      "Created the iconic 'Girl with a Pearl Earring'",
      "Known for his slow and careful working method",
      "Highly regarded for his use of expensive pigments"
    ],
    artworks: [
      {
        title: "Girl with a Pearl Earring",
        year: "c. 1665",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Johannes_Vermeer_%281632-1675%29_-_Girl_with_a_Pearl_Earring_2014_edit.jpg/800px-1665_Johannes_Vermeer_%281632-1675%29_-_Girl_with_a_Pearl_Earring_2014_edit.jpg",
        description: "Vermeer's most famous work, often called the 'Mona Lisa of the North'."
      },
      {
        title: "The Milkmaid",
        year: "c. 1657–1658",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/800px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
        description: "An oil-on-canvas painting of a 'milkmaid', actually a domestic kitchen maid, by Johannes Vermeer."
      },
      {
        title: "The Art of Painting",
        year: "c. 1666–1668",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/1024px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
        description: "A large oil painting by Johannes Vermeer, showing an artist painting a female model."
      }
    ]
  },
  {
    id: "edvard-munch",
    name: "Edvard Munch",
    years: "1863–1944",
    nationality: "Norwegian",
    style: "Expressionism, Symbolism",
    bio: "Edvard Munch was a Norwegian painter and printmaker whose intensely evocative treatment of psychological themes built upon some of the main tenets of late 19th-century Symbolism and greatly influenced German Expressionism in the early 20th century.",
    achievements: [
      "Pioneer of Expressionism",
      "Created 'The Scream', a universal symbol of anxiety",
      "Explored themes of life, death, and love",
      "Mastered both painting and printmaking"
    ],
    artworks: [
      {
        title: "The Scream",
        year: "1893",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg",
        description: "A series of expressionist paintings and prints by Norwegian artist Edvard Munch, showing a figure with an agonized expression."
      },
      {
        title: "The Madonna",
        year: "1894",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg/800px-Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg",
        description: "A painting by Edvard Munch showing a bare-breasted woman with a red halo."
      },
      {
        title: "The Dance of Life",
        year: "1899–1900",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The_Dance_of_Life_-_Edvard_Munch_1899.jpg/1024px-The_Dance_of_Life_-_Edvard_Munch_1899.jpg",
        description: "An expressionist painting by Edvard Munch, representing the stages of a woman's life."
      }
    ]
  }
];

export default artists;
