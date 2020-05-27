import pikachuImg from '../assets/images/plans/pikachu.png'
import bulbassaurImg from '../assets/images/plans/bulbassaur.png'
import charmanderImg from '../assets/images/plans/charmander.png'
import squirtleImg from '../assets/images/plans/squirtle.png'

const planData = [
    {
        name: 'Plano Pikachu',
        value: 0,
        basic: true,
        image: pikachuImg,
        description: 'Plano básico, que contém o minímo necessário para aperfeiçoar seu pokémon.',
        duration: undefined,
        color: 'warning',
        first: 'Use um treino gratuito por mês',
        second: 'Acesso limitado a nossa plataforma',
        third: 'Cadastre quantos pokémons você quiser',
        price: 'Plano gratuito',
        priceMessage: 'Plano gratuito',
        message: 'Assine um plano'
    },
    {
        name: 'Plano Bulbassaur',
        value: 1,
        basic: false,
        image: bulbassaurImg,
        duration: 1,
        description: 'O plano essencial necessário para você se iniciar no universo pokémon.',
        color: 'success',
        first: 'Upar até cinco níveis de cada pokémon.',
        second: 'Treine até cinco pokémons diferentes.',
        third: 'Cada treinamento dura de 6 a 7 dias.',
        price: '49,99',
        priceMessage: 'Assine já por R$ 49,99!',
        message: 'Renove seu plano'
    },
    {
        name: 'Plano Squirtle',
        value: 2,
        basic: false,
        image: squirtleImg,
        duration: 3,
        description: 'O plano intermediário para você tornar seus pokémons mais talentosos.',
        color: 'primary',
        first: 'Upar até quinze níveis de cada pokémon.',
        second: 'Treine até quinze pokémons diferentes.',
        third: 'Cada treinamento dura de 3 a 4 dias.',
        price: '99,99',
        priceMessage: 'Assine já por R$ 99,99!',
        message: 'Renove seu plano'
    },
    {
        name: 'Plano Charmander',
        basic: false,
        value: 3,
        image: charmanderImg,
        duration: 6,
        description: 'O plano completo com todos os benefícios para os seus pokémons se tornarem os melhores.',
        color: 'danger',
        first: 'Upar níveis ilimitados de cada pokémon.',
        second: 'Treine quantos pokémons desejar.',
        third: 'Cada treinamento dura no máximo 2 dias.',
        price: '199,99',
        priceMessage: 'Assine já por R$ 199,99!',
        message: 'Renove seu plano'
    }
]

export { planData }