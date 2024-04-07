import { text } from "stream/consumers";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            navmenu: {
                home: 'Home',
                about: 'About us',
                blog: 'Blog',
                gallery: 'Gallery',
                contact: 'Contact',
                en: 'EN',
                ka: 'KA'
            },
            home: {
                headline: {
                    strartword: 'Hi, welcome',
                    underlineword: 'logoname',
                    finishword: 'loque'
                },
                text1: 'And café frappuccino extraction filter froth sugar siphon coffee pumpkin press milk ristretto et au. Trade instant aged as wings bar seasonal pumpkin barista turkish shot go seasonal robusta. Strong iced lungo frappuccino espresso redeye macchiato aftertaste trade pot. Seasonal turkish mocha wings sit crema blue au and grounds eu cortado café cup. Filter viennese bar seasonal wings siphon as frappuccino go luwak single mazagran.',
                text2: 'And café frappuccino extraction filter froth sugar siphon coffee pumpkin press milk ristretto et au. Trade instant aged as wings bar seasonal pumpkin barista turkish shot'
            },
            about: {
                titletext: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
                text1: 'By conducting thorough research and understanding their target audience, I was able to establish a cohesive visual language that effectively communicates the journal\'s core values and mission.',
                text2: 'Noteworthy accomplishments include implementing responsive design, optimizing the website\'s navigation, and increasing overall user engagement. Through our partnership, Horizons in Perspective now boasts a distinctive and memorable brand, with a seamless online experience that resonates with their readers and bolsters their position as a thought leader in the realm of innovation and creativity.'
            },
            blog: {
                title: 'Lase news',
                category: 'Category',
                sharearticle: 'Share article',
                copylink: 'Copy link'
            },
            gallery: {
                title: 'Gallery of images',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, nunc nec vehicula fermentum, nisl dolor ultrices',
                button: 'See the gallery'
            },
            contact: {
                headline: {
                    strartword: 'How can we',
                    underlineword: 'help you?'
                },
                text1: 'Contactanos y mediante este formulario y te responderemos lo antes posible. Gracias por tu interés.',
                fillform: 'Fill out the form',
                name: 'Name',
                surname: 'Surname',
                email: 'Email',
                message: 'Message',
                leaveusehere: 'Leave us a message',
                submit: 'Send the message',
                sending: 'Sending...',
                error: 'Error sending the message',
                success: 'Message sent successfully'
            },
            thanks: {
                text1: 'We will get back to you as soon as possible. In the meantime, feel free to check out our latest blog posts.',
                button: 'Go to home'
            },
            pagination: {
                prev: 'Previous',
                next: 'Next'
            },
            footer: {
                title: 'Lets make something great together',
                text1: 'Iced pumpkin ristretto irish trifecta robusta trade froth affogato barista con barista cappuccino filter roast.',
                emailus: 'Email us'
            }
        },
        ka: {
            navmenu: {
                home: 'მთავარი',
                about: 'ჩვენს შესახებ',
                blog: 'სიახლე',
                gallery: 'გალერეა',
                contact: 'კონტაქტი',
                en: 'ინ',
                ka: 'ქა'
            },
            home: {
                headline: {
                    strartword: 'Hi, welcome',
                    underlineword: 'გამარჯობა',
                    finishword: 'loque'
                },
                text1: 'რომელიც მორგებულია ყოველი სტუდენტის ინტერესზე, ორიენტირებულია მათ სამომავლო პერსპექტივების განვითარებაზე და თავისი წევრების დასაქმებაზე.',
                text2: 'მორგებულია ყოველი სტუდენტის ინტერესზე, ორიენტირებულია მათ სამომავლო პერსპექტივების განვითარებაზე და თავისი წევრების დასაქმებაზე.'
            },
            about: {
                titletext: 'რომელიც მორგებულია ყოველი სტუდენტის ინტერესზე, ორიენტირებულია მათ სამომავლო პერსპექტივების განვითარებაზე და თავისი წევრების დასაქმებაზე.',
                text1: 'სტუდენტის ინტერესზე, ორიენტირებულია მათ სამომავლო პერსპექტივების განვითარებაზე და თავისი წევრების დასაქმებაზე.',
                text2: 'ინტერესზე, ორიენტირებულია მათ სამომავლო პერსპექტივების განვითარებაზე და თავისი წევრების დასაქმებაზე.'
            },
            blog: {
                title: 'ბოლო სიახლეები',
                category: 'კატეგორია',
                sharearticle: 'სტატიის გაზიარება',
                copylink: 'ლინკის ასლი'
            },
            gallery: {
                title: 'სურათების გალერეა',
                text1: 'ლორემ იპსუმ დოლორ სით ამეთ, კონსექტეტურ ადიპისცინგ ელით. სედ პულვინარ, ნუნც ნეც ვეჰიკულა ფერმენტუმ, ნისლ დოლორ ულტრიცეს',
                button: 'გალერეის ნახვა'
            },
            contact: {
                headline: {
                    strartword: 'როგორ',
                    underlineword: 'შეგიხსენით?'
                },
                text1: 'დაგვიკავშირდით და ამ ფორმულარის მეშვეობით განიხილებთ. მადლობა თქვენი ინტერესისთვის',
                fillform: 'ფორმას შეავსეთ',
                name: 'სახელი',
                surname: 'გვარი',
                email: 'ელ. ფოსტა',
                message: 'წერილი',
                leaveusehere: 'გვეტყვით წერილი',
                submit: 'წერილის გაგზავნა',
                sending: 'გაგზავნა...',
                error: 'წერილი გაგზავნისას შეცდომა',
                success: 'წერილი წარმატებით გაიგზავნა'
            },
            thanks: {
                text1: 'ჩვენ მივიღებთ თქვენთვის პასუხს ასაფრებლებს. ინტერესისამებრ, გთხოვთ შეამოწმოთ ჩვენი უკანასკნელი ბლოგ-პოსტები.',
                button: 'გადასვლა მთავარისთვის'
            },
            pagination: {
                prev: 'წინა',
                next: 'შემდეგი'
            },
            footer: {
                title: 'Lets make something great together',
                text1: 'Iced pumpkin ristretto irish trifecta robusta trade froth affogato barista con barista cappuccino filter roast.',
                emailus: 'მოგვწერეთ'
            }
        }
    }
  }))