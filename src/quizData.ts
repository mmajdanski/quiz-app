export interface QuestionData {
    question: string;
    options: string[];
    correctAnswer: string;
  }

  const quizData: QuestionData[] = [
    {
      question: "What's the wildest thing you've ever done?",
      options: ['I went skydiving on my birthday', 'I used to walk around with friends and burn anything that was burnable', 'I once bungee jumped off a bridge in Poland', 'I climbed to the top of a mountain and spent the night camping in a tent on the summit'],
      correctAnswer: 'I used to walk around with friends and burn anything that was burnable',
    },
    {
      question: "What's your favorite thing about yourself?",
      options: ['I have a great sense of humor and I love making people laugh', "I'm a good listener and I really value meaningful conversations with others", "I'm really good at solving problems and coming up with creative solutions", "I'm really curious about the world and question many things"],
      correctAnswer: "I'm really curious about the world and question many things",
    },
    {
      question: "What's your dream job?",
      options: ["I've dreamed of being a musician since I was a kid, and performing on stage would be a dream come true", "I've always dreamed of being a motivational speaker and using my words to empower and inspire others to reach for their goals and achieve their dreams", "I've always wanted to be a chef and own my own restaurant", "I've always been fascinated by psychology and I would love to work as a therapist or counselor"],
      correctAnswer: "I've always dreamed of being a motivational speaker and using my words to empower and inspire others to reach for their goals and achieve their dreams",
    },
    {
      question: "What's your favorite type of dessert?",
      options: ["Chocolate", "Peanut Butter Ice Cream", "Cheesecake", "Brownies" ],
      correctAnswer: "Cheesecake",
    },
    {
      question: "What's your favorite sport to play?",
      options: ["Soccer", "Wrestling", "Pole vault", "Football" ],
      correctAnswer: "Wrestling",
    },
    {
      question: "What makes you automatically swipe left on a person?",
      options: ["If someone's first picture is of them smoking a blunt or doing hard drugs", "If someone is un-athletic", "If someone's profile is too negative ", "If their career looks like it's going nowhere" ],
      correctAnswer: "If someone's first picture is of them smoking a blunt or doing hard drugs",
    },
    {
      question: "What's the most embarrassing thing you've ever done in front of someone you like?",
      options: ["Shit my pants", "I once tripped and fell while trying to impress a crush", "I accidentally walked into the women's bathroom", "I accidentally spilled a drink on myself while trying to be smooth" ],
      correctAnswer: "Shit my pants",
    },
    {
      question: "What's your biggest turn off?",
      options: ["When people are insincere", "When people are direspectful", "People who have a big ego", "Bad Hygiene" ],
      correctAnswer: "Bad Hygiene",
    },
    {
      question: "Which movie had a huge impact on you?",
      options: ["Up by Pixar", "Forrest Gump", "Inception", "The Lion King" ],
      correctAnswer: "Forrest Gump",
    },
    {
      question: "How much do looks and appearance have to do with a relationship?",
      options: ["2/5 (not so important)", "3/5 (somewhat important)", "4/5 (significantly important)", "5/5 (very important)" ],
      correctAnswer: "4/5 (significantly important)",
    },
    {
      question: "Were you ever obsessed in an unhealthy way about someone from the past?",
      options: ["No", "No, but they were obsessed with me", "Yes, but only because they were obsessed with me", "Yes" ],
      correctAnswer: "No",
    },
    {
      question: "What's been your least favorite job thus far?",
      options: ["Applebees", "Cleaning Real Estate Offices", "Working for Ralph Lauren", "Working for BMW" ],
      correctAnswer: "Cleaning Real Estate Offices",
    },
    {
      question: "What do you think is the most important quality in a relationship",
      options: ["Trust", "Financial Stability", "Great sex", "Political alignment" ],
      correctAnswer: "Trust",
    },
    {
      question: "What animal do you have the most traits in common with?",
      options: ["Sloth", "Polar bear", "Otter", "Raccoon" ],
      correctAnswer: "Otter",
    },
    {
      question: "What website do you spend the most time on every day?",
      options: ["YouTube", "Reddit", "Twitch", "Instagram" ],
      correctAnswer: "YouTube",
    },
    {
      question: "Do you care whether your parents get along with the person you're dating?",
      options: ["Yes", "No", "No, it's only important if I get along with them", "Yes, if things are getting serious" ],
      correctAnswer: "Yes, if things are getting serious",
    },
    {
      question: "What do you spend way too much money on?",
      options: ["Vacations", "My hobbies", "Music/Shows/Festivals", "Food" ],
      correctAnswer: "Food",
    },
    {
      question: "What's your biggest pet peeve?",
      options: ["Biting Nails", "Uncontrollable Shaking Legs", "Picking your nose", "Loud chewing" ],
      correctAnswer: "Biting Nails",
    },
    {
      question: "What holiday do you think we should cancel?",
      options: ["Halloween", "Christmas", "Thanksgiving", "4th of July" ],
      correctAnswer: "Halloween",
    },
    {
      question: "What do you think is your best quality?",
      options: ["Being funny", "Being smart", "Being curious", "Being strong" ],
      correctAnswer: "Being smart",
    },
    {
      question: "How do I interact with someone who disagrees with me?",
      options: ["I get dismissive", "I listen to what they have to say", "I ignore them", "I get silent" ],
      correctAnswer: "I listen to what they have to say",
    },
    {
      question: "If you had unlimited money to start your own business, what would it be?",
      options: ["Record Label", "Start a tech company", "Start a restaurant", "Open a gym" ],
      correctAnswer: "Start a tech company",
    },
    {
      question: "At a party, where can someone find you?",
      options: ["Beer pong table", "Outside chilling", "Chugging water", "Around the campfire" ],
      correctAnswer: "Around the campfire",
    },
    {
      question: "Do you believe in second chances?",
      options: ["No", "Yes", "Yes, but it depends how bad the mistake was", "No, they are bound to repeat their mistakes" ],
      correctAnswer: "Yes, but it depends how bad the mistake was",
    },
    // Add more questions here...
  ];

  export default quizData;
