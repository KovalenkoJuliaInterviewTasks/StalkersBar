export const foodItems =
    [
        {title: 'starter', titleEn: 'Starters', titleHe: 'תוספי מנוע', titleRu: 'Стартеры', items:
                [{titleEn: 'Chips', titleRu: 'Чипс', titleHe: 'צ\'יפס', image: 'chips.jpg', cost1: 20},
                    {titleEn: 'Chips with cheese', titleRu: 'Чипс с сыром', titleHe: 'צ\'יפס עם גבינה',
                        descRu: 'Брынза или пармезан', descEn: 'Bulgarian cheese or parmigiana', descHe: 'בולגרית ור פרמז\'אנו',
                        image: 'chips.jpg', cost1: 25},
                    {titleEn: 'Chips with 2 cheeses', titleRu: 'Чипс с 2 сырами', titleHe: 'צ\'יפס עם 2 גבינות',
                        image: 'chips.jpg', cost1: 25},
                   {titleEn: 'A well', titleRu: 'Колодец', titleHe: 'באר',
                       descRu: 'Garlic rye toasts', descEn: 'Ржаные гренки с чесноком', descHe: 'קרוטונים מלחם שיפון עם שום',
                       image: 'well.jpeg', cost1: 20},
                   {titleEn: 'Spikachki sausages', titleRu: 'Шпикачки', titleHe: 'נקנקיות שפיקאצ\'קי',
                        image: 'spikachki.jpg', cost1: 25},
                    {titleEn: 'Onion rings', titleRu: 'Луковые кольца', titleHe: 'טבעות בצל',
                        image: 'onion_ring.jpg', cost1: 25},
                    {titleEn: 'Greek salad', titleRu: 'Греческий салат', titleHe: 'סלט יווני',
                        image: 'greek_salad.jpg', cost1: 25}]
        },
        {title: 'marine', titleEn: 'Marine Fuel', titleHe: 'דלק ימי', titleRu: 'Морское топливо', items:
                [{titleEn: 'Cocktail shrimps', titleRu: 'Коктейльные креветки', titleHe: 'שרימפס קוקטייל',
                    image: 'coctail_shrimps.jpg', cost1: 50},
                    {titleEn: 'Shrimp in disguise', titleRu: 'Креветки в маскировке', titleHe: 'שרימפס בהסוואה',
                        image: 'shrimps.jpg', cost1: 50},
                    {titleEn: 'Fish&Chips', titleRu: 'Фиш&Чипс', titleHe: 'פיש&צ\'פס',
                        image: 'fish_chips.jpg', cost1: 60}]
        },
        {title: 'ground', titleEn: 'Ground Fuel', titleHe: 'דלק יבשתי', titleRu: 'Наземное топливо', items:
                [{titleEn: 'Schnitzel + Chips + Salad', titleRu: 'Шницель + Чипс + Салат', titleHe: 'שניצל + צ\'יפס + סלט',
                    image: 'shnitzel_chips_salad.jpg', cost1: 60},
                    {titleEn: 'Frankfurters + Chips + Sauerkraut', titleRu: 'Колбаски + Чипс + Квашеная капуста',
                        titleHe: 'פראנקוורסט + צ\'יפס + כרוב כבוש', image: 'sausage_chips_cabbage.jpg', cost1: 90}]
        }
    ];
export const barItems =
    [
        {title: 'cooling', titleEn: 'Cooling agents', titleHe: 'קררים', titleRu: 'Хладогенты'},
        {title: 'draft', titleEn: 'Draft', titleHe: 'חבית', titleRu: 'Бочка', items:
                [{titleEn: 'Budvar dark czech lager', titleRu: 'Будвар чешское темное', titleHe: 'בודבר ציכית כהה',
                    image: 'blackbeer.jpg', cost1: 20, cost2: 30, cap1: '1/3 L', cap2: '1/2 L'},
                    {titleEn: 'Krusovice czech lager', titleRu: 'Крушовице светлое', titleHe: 'קרושוביצה צ\'כית בהירה',
                        image: 'whitebeer.jfif', cost1: 20, cost2: 30, cap1: '1/3 L', cap2: '1/2 L'},
                    {titleEn: 'Blanche belgian wheat', titleRu: 'Бланш бельгийское пшеничное', titleHe: 'בלאנש בלגית חיטה',
                        image: 'blanche.jfif', cost1: 20, cost2: 30, cap1: '1/3 L', cap2: '1/2 L'},
                    {titleEn: 'Magners irish cider', titleRu: 'Магнерс ирландский сидр', titleHe: 'מגנרס סיידר אירי',
                        image: 'sidr.jfif', cost1: 30, cost2: 40, cap1: '1/3 L', cap2: '1/2 L'}]
        },
        {title: 'bottled', titleEn: 'Bottled', titleHe: 'בקבוק', titleRu: 'Бутылка', items:
                [{titleEn: 'Goldstar', titleRu: 'Голдстар', titleHe: 'גולדסטר', image: 'goldstar.jfif',
                    cost1: 20, cap1: '1/3 L'},
                    {titleEn: 'Haineken', titleRu: 'Хайникен', titleHe: 'חייניקן', image: 'heineken.jfif',
                        cost1: 20, cap1: '1/3 L'},
                    {titleEn: 'Corona', titleRu: 'Корона', titleHe: 'קורונה', image: 'corona.jfif',
                        cost1: 20, cap1: '1/3 L'},
                    {titleEn: 'Leffe', titleRu: 'Леф', titleHe: 'לף', image: 'leffe.jfif', cost1: 30, cap1: '1/3 L'},
                    {titleEn: 'Kasteel', titleRu: 'Кастиль', titleHe: 'קסטיל', image: 'kasteel.jfif',
                        cost1: 40, cap1: '1/3 L'}]
        },
        {title: 'fuel', titleEn: 'Fuel', titleHe: 'תוספי מנוע', titleRu: 'Топливо'},
        {title: 'whiskey', titleEn: 'Whiskey', titleHe: 'ויסקי', titleRu: 'Виски', items:
                [{titleEn: 'Jameson', titleRu: 'Джеймсон', titleHe: 'ג\'ימסון', image: 'jameson.jpg',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Jack Daniels', titleRu: 'Джек Дэниэлс', titleHe: 'ג\'ק דניאלס', image: 'jack.jpg',
                        cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Monkey Shoulder', titleRu: 'Манки Шолдер', titleHe: 'מנק\' שולדר', image: 'monkey.jpg',
                        cost1: 25, cost2: 40, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Tenjaku', titleRu: 'Тенжаку', titleHe: 'טנג\'אקו', image: 'tenjaku.jpg',
                        cost1: 25, cost2: 40, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Glenfiddich 12', titleRu: 'Гленфидих 12', titleHe: 'גלנפידיח 12', image: 'glenfiddich12.jfif',
                        cost1: 30, cost2: 50, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Glenfiddich 15', titleRu: 'Гленфидих 15', titleHe: 'גלנפידיח 15', image: 'glenfiddich15.jpg',
                        cost1: 30, cost2: 50, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'vodka', titleEn: 'Vodka', titleHe: 'וודקה', titleRu: 'Водка', items:
                [{titleEn: 'Russkij Standart', titleRu: 'Русский Стандрт', titleHe: 'רוסקיי סטנדרת', image: 'russian.jfif',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Van Gogh Acai', titleRu: 'Ван Гог Асаи', titleHe: 'ואן גוג אסאי', image: 'vangogh.jfif',
                        cost1: 25, cost2: 40, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'rum', titleEn: 'Rum', titleHe: 'רום', titleRu: 'Ром', items:
                [{titleEn: 'Baccardi', titleRu: 'Бакарди', titleHe: 'בקרד', image: 'bacardi.jpg',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Captain Morgan', titleRu: 'Капитан Морган', titleHe: 'קפטן מורגן', image: 'captain.jfif',
                        cost1: 25, cost2: 40, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'cognac', titleEn: 'Cognac', titleHe: 'קוניאק', titleRu: 'Коньяк', items:
                [{titleEn: 'Meukow De Lux', titleRu: 'Меуков Де Люкс', titleHe: 'מיוקוב דה לוקס', image: 'meukow.jpg',
                    cost1: 40, cap1: '50ml'},
                    {titleEn: 'Courvoisier VS', titleRu: 'Курвуазье VS', titleHe: 'קורוואזיה VS', image: 'corvoisierVS.jpg',
                        cost1: 40, cap1: '50ml'},
                    {titleEn: 'Remy Martin VSOP', titleRu: 'Реми Мартин VSOP', titleHe: 'רמי מרטין VSOP', image: 'remy.jfif',
                        cost1: 60, cap1: '50ml'}]
        },
        {title: 'gin', titleEn: 'GIN', titleHe: 'ג\'ין', titleRu: 'Джин', items:
                [{titleEn: 'Bombay', titleRu: 'Бомбей', titleHe: 'בומבאי', image: 'bombay.jfif',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Befeater', titleRu: 'Бифитер', titleHe: 'ביפיטר', image: 'beefeater.jfif',
                        cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'tequila', titleEn: 'Tequila', titleHe: 'טקילה', titleRu: 'Текила', items:
                [{titleEn: 'Cuervo Gold', titleRu: 'Куэрво Голд', titleHe: 'קוארבו גולד', image: 'cuervoG.jfif',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'},
                    {titleEn: 'Cuervo Silver', titleRu: 'Куэрво Силвер', titleHe: 'קוארבו סילבר', image: 'cuervoS.jpg',
                        cost1: 25, cost2: 40, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'absent', titleEn: 'Absent', titleHe: 'אבסנט', titleRu: 'Абсент', items:
                [{titleEn: 'La Cour', titleRu: 'Ла Кур', titleHe: 'לה קור', image: 'lacour.jfif',
                    cost1: 25, cost2: 40, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'ouzo', titleEn: 'Ouzo', titleHe: 'אוזו', titleRu: 'Узо', items:
                [{titleEn: 'Plomari', titleRu: 'Пломари', titleHe: 'פלומרי', image: 'plomari.jfif',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'liker', titleEn: 'Likers', titleHe: 'ליקרים', titleRu: 'Ликеры', items:
                [{titleEn: 'Jagermeister', titleRu: 'Егермайстер', titleHe: 'יגרמאייסטר', image: 'jagermeister.jfif',
                    cost1: 15, cost2: 25, cap1: '30ml', cap2: '50ml'}]
        },
        {title: 'mix', titleEn: 'Fuel Mixture', titleHe: 'תערובות בעירה', titleRu: 'Топливные смеси'},
        {title: 'mixture', titleEn: '2 component mixture', titleHe: 'תערובת של 2', titleRu: '2-х компонентные смеси', items:
                [{titleEn: 'Whiskey-Cola', titleRu: 'Виски-Кола', titleHe: 'ויסקי-קולה', image: 'wiskey_cola.jpg',
                    cost1: 35
                },
                    {titleEn: 'Rum-Cola', titleRu: 'Ром-Кола', titleHe: 'רום-קולה', image: 'rom_cola.jfif', cost1: 35},
                    {titleEn: 'Vodka-XL', titleRu: 'Водка-XL', titleHe: 'וודקה-אקסל', image: 'vodkaXL.jfif', cost1: 35},
                    {titleEn: 'Gin-Tonic', titleRu: 'Джин-Тоник', titleHe: 'ג\'ין-טוניק', image: 'jin_tonic.jpg', cost1: 35},
                    {titleEn: 'Screwdriver', titleRu: 'Отвертка', titleHe: 'מברג', image: 'otvertka.jfif', cost1: 35},
                    {titleEn: 'Vodka-Cranberries', titleRu: 'Водка-Клюква', titleHe: 'וודקה-חמוציות', image: 'vodka_klyuk.jfif', cost1: 35}]
        },
        {title: 'dot', titleEn: 'DOT 4', titleHe: 'דוט 4', titleRu: 'ДОТ 4', items:
                [{titleEn: 'Martini Bianco', titleRu: 'Мартини Бианко', titleHe: 'מרטיני ביאנקו',
                    image: 'martiniB.jfif', cost1: 30},
                    {titleEn: 'Martini Roso', titleRu: 'Мартини Росо', titleHe: 'מרטיני רוסו', image: 'martiniR.jfif',
                        cost1: 30},
                    {titleEn: 'Lambrusco', titleRu: 'Ламбруско', titleHe: 'למברוסקו', image: 'lambrusco.jfif',
                        cost1: 30},
                    {titleEn: 'Kawa', titleRu: 'Кава', titleHe: 'קאוה', image: 'kawa.jfif', cost1: 30},
                    {titleEn: 'Prosecco', titleRu: 'Просекко', titleHe: 'פרוסקו', image: 'prosecco.jfif', cost1: 30},
                    {titleEn: 'Red wine', titleRu: 'Красное вино', titleHe: 'יין אדום', image: 'redWine.jfif',
                        cost1: 30},
                    {titleEn: 'White wine', titleRu: 'Белое Вино', titleHe: 'יין לבן', image: 'whiteWine.jfif',
                        cost1: 30},
                    {titleEn: 'Apperol-shpritz', titleRu: 'Аппероль-Шприц', titleHe: 'אפרול-שפריץ', image: 'apperol_shpitz.jfif',
                        cost1: 30},
                    {titleEn: 'Campari', titleRu: 'Кампари', titleHe: 'קמפארי', image: 'campari.jfif', cost1: 50},
                    {titleEn: 'Soft drinks', titleRu: 'Легкие напитки', titleHe: 'שתיה קלה', image: 'juice.jpg',
                        cost1: 10},
                    {titleEn: 'Espresso', titleRu: 'Эспрессо', titleHe: 'אספרסו', image: 'espresso.jfif', cost1: 10}]
        }
    ];

export const events =
    [
         {
            title: 'Stalkfish', image: 'stalkfish.jpg',
            descRu: 'Stalkfish - блюз-рок/фанк-группа из Иерусалима/Тель-Авива, которая исполняет преимущественно каверы SRV Jimmy Hendrix, Robben Ford, Robert Cray, как в акустической, так и в электрической версиях.',
            descEn: 'Stalkfish is a blues-rock/funk band from Jerusalem/Tel Aviv that primarily performs covers of SRV, Jimi Hendrix, Robben Ford, and Robert Cray, both in acoustic and electric versions.',
            descHe: 'סטלקפיש היא להקת בלוז רוק/פאנק מירושלים/תל אביב שמנגנת בעיקר קאברים של ג\'ימי הנדריקס, רובן פורד, רוברט קריי, אקוסטית וחשמלית.',
            date: '2025-03-27',
            open: '20:00',
            start: '21:00',
            price: 70
        },
        {
            title: 'Capybaras', image: 'capybaras.jpg',
            descRu: 'Играем кавер версии классики блюза, поп рока, фанк рока, хард рока! Джимми Хендрикс ,Джанис Джоплин, Эрик Клептон,CRV,Джо Бонамасса, Урия Хипп, DEEP PURPLE, Джо Сатриани, Стив Вай,и оригинальные инструментальные композиции!\n' +
                '🎤 Юлианна Васильева - вокал\n' +
                '🎸 Том Шапира - гитара\n' +
                '🎸Андрей Васильев (Худой) - бас, экс DDТ\n' +
                '🎤 🎸 Mikky - вокал, гитара, бас\n' +
                '🥁 Игорь Грушевский (Old drummer) - барабаны',
            descEn: 'We play cover versions of classic blues, pop rock, funk rock, and hard rock! Featuring music from Jimi Hendrix, Janis Joplin, Eric Clapton, SRV, Joe Bonamassa, Uriah Heep, Deep Purple, Joe Satriani, Steve Vai, and original instrumental compositions!\n' +
                '🎤 Yulianna Vasilieva – Vocals\n' +
                '🎸 Tom Shapira – Guitar\n' +
                '🎸 Andrey Vasiliev (Khudoy) – Bass, ex-DDT\n' +
                '🎤 🎸 Mikky – Vocals, Guitar, Bass\n' +
                '🥁 Igor Grushevsky (Old Drummer) – Drums',
            descHe: '\n' +
                'אנחנו מנגנים גרסאות כיסוי של בלוז קלאסי, פופ רוק, פאנק רוק, הארד רוק! ג\'ימי הנדריקס, ג\'ניס ג\'ופלין, אריק קלפטון, CRV, ג\'ו בונמסה, אוריה היפ, DEEP PURPLE, ג\'ו סטריאני, סטיב ואי ומכשירים מקוריים!\n' +
                '🎤 יוליאנה ואסילייבה - שירה\n' +
                '🎸 תום שפירא -גיטרה.\n' +
                '🎸 אנדריי וסילייב (חודוי) - בס, לשעבר DDT\n ' +
                '🎤 🎸 מיקי - שירה, גיטרה, בס\n' +
                '🥁 איגור גרושבסקי (מתופף ותיק) - תופים',
            date: '2025-03-28',
            open: '20:00',
            start: '21:00',
            price: 70
        },
        {
            title: 'АлёнаDUST', image: 'alenaDUST.jpg',
            descRu: 'Беер-Шевская кавер группа АлёнаDUST исполнит для вас качественный русский рок! Коллектив работает с 2012 года и за это время дал больше 300 концертов по всей стране!',
            descEn: 'The Be\'er Sheva cover band AlёнаDUST will deliver high-quality Russian rock for you! The band has been performing since 2012 and has played over 300 concerts across the country!',
            descHe: 'הלהקת קאברים מבאר-שבע "АлёнаDUST" תבצע עבורכם רוק רוסי איכותי! הלהקה פועלת מאז 2012 ונתנה יותר מ-300 הופעות ברחבי הארץ',
            date: '2025-04-03',
            open: '20:00',
            start: '21:00',
            price: 40
        },
        {
            title: 'La Bella Cubana', image: 'laBellaCubana.jpg',
            descRu: 'La Bella Cubana - Яна Мирабель Родригез и Джек Писак - если вам близка музыка латино, а испанская речь пробуждает в вас страсть, если вы хотели бы посетить Кубу, но пока не получилось - тогда вам сюда!!!',
            descEn: 'La Bella Cubana – Yana Mirabel Rodriguez and Jack Pisak! If Latin music is close to your heart, if the Spanish language awakens passion in you, and if you\'ve always wanted to visit Cuba but haven\'t had the chance yet – then this is the place for you!',
            descHe: 'La Bella Cubana – יאנה מיראבל רודריגז וג\'ק פיסאק!\n' +
                'אם המוזיקה הלטינית קרובה ללבכם, אם השפה הספרדית מעוררת בכם תשוקה, ואם תמיד רציתם לבקר בקובה אבל עדיין לא יצא – זה המקום בשבילכם!',
            date: '2025-04-04',
            open: '20:00',
            start: '21:00',
            price: 70
        },
        {
            title: 'Lazer Lloyd & Band', image: 'lazerLloyd.jpg',
            descRu: 'Легендарный Лейзер Ллойд и его группа возвращаются в Беер-Шеву, чтобы погрузить вас в настоящий рок-н-ролл!!!\n' +
                'Этот артист не нуждается в представлении, но если вдруг кто-то не знает о ком идет речь, то вот вам пару ссылок:\n' +
                'https://www.lazerlloyd.live/\n' +
                'https://en.wikipedia.org/wiki/Lazer_Lloyd',
            descEn: 'The legendary Lazer Lloyd and his band are returning to Be\'er Sheva to immerse you in true rock \'n\' roll!!!\n' +
                'This artist needs no introduction, but just in case someone doesn\'t know – here are a couple of links:\n' +
                '🔗 https://www.lazerlloyd.live/\n' +
                '🔗 https://en.wikipedia.org/wiki/Lazer_Lloyd"',
            descHe: '\n' +
                'הלהיט האגדי לייזר לויד והלהקה שלו חוזרים לבאר-שבע כדי להכניס אתכם לאווירת רוקנרול אמיתי!!!\n' +
                'האמנית הזאת לא צריכה הצגה, אבל אם במקרה מישהו לא יודע על מי\n' +
                ':מדובר, הנה לכם כמה קישורים\n' +
                'https://www.lazerlloyd.live/\n' +
                'https://en.wikipedia.org/wiki/Lazer_Lloyd',
            date: '2025-04-10',
            open: '20:00',
            start: '21:00',
            price: 70
        },
        {
            title: 'Stav Fisher Blues Band', image: 'stavFisher.jpg',
            descRu: 'Stav Fisher Blues Band - это коллектив, взорвавший блюзовую сцену в нашей стране за последний год, с успехом отметившись на престижных фестивалях и концертных площадках. Разнообразная, качественная программа, состоящая не только из традиционных блюзовых стандартов но и задорных рок-н-роллов, не оставит равнодушными не только любителей этого обширного жанра, но и людей с разнообразными музыкальными вкусами.',
            descEn: 'Stav Fisher Blues Band is a group that has taken the blues scene in our country by storm over the past year, making a name for itself at prestigious festivals and concert venues. With a diverse, high-quality setlist featuring not only traditional blues standards but also energetic rock \'n\' roll tracks, this band will captivate not only blues enthusiasts but also music lovers of all kinds.',
            descHe: 'Stav Fisher Blues Band הוא הרכב שכבש את סצנת הבלוז בארצנו בשנה האחרונה, וזכה להצלחה בפסטיבלים יוקרתיים ובמקומות הופעה נחשבים. עם רפרטואר מגוון ואיכותי הכולל לא רק סטנדרטים מסורתיים של בלוז אלא גם רוקנרול סוחף, הלהקה הזו תכבוש לא רק את אוהבי הז\'אנר אלא גם קהל עם טעמים מוזיקליים מגוונים.',
            date: '2025-04-11',
            open: '20:00',
            start: '21:00',
            price: 70
        }
    ];

export const albums = [{
    titleEn: 'The Jockers',
    titleRu: 'The Jockers',
    titleHe: 'The Jockers',
    date: '2025-03-14',
    items: ['14.03.01.jpg', '14.03.02.jpg', '14.03.03.jpg', '14.03.04.jpg', '14.03.05.jpg', '14.03.06.jpg', '14.03.07.jpg', '14.03.08.jpg', '14.03.09.jpg', '14.03.10.jpg', '14.03.11.jpg', '14.03.12.jpg', '14.03.13.jpg', '14.03.14.jpg', '14.03.15.jpg', '14.03.16.jpg', '14.03.17.jpg', '14.03.18.jpg', '14.03.19.jpg', '14.03.20.jpg', '14.03.21.jpg', '14.03.22.jpg', '14.03.23.jpg', '14.03.24.jpg', '14.03.25.jpg', '14.03.36.jpg', '14.03.27.jpg', '14.03.28.jpg', '14.03.29.jpg', '14.03.30.jpg', '14.03.31.jpg', '14.03.32.jpg', '14.03.33.jpg', '14.03.34.jpg', '14.03.35.jpg', '14.03.36.jpg', '14.03.37.jpg', '14.03.38.jpg', '14.03.39.jpg', '14.03.40.jpg']
},
    {
        titleEn: 'Club house opening',
        titleRu: 'Открытие club house ',
        titleHe: 'פתיחה club house',
        date: '2025-03-13',
        items: ['13.03.001.jpg', '13.03.002.jpg', '13.03.003.jpg', '13.03.004.jpg', '13.03.005.jpg', '13.03.006.jpg', '13.03.007.jpg', '13.03.008.jpg', '13.03.009.jpg', '13.03.010.jpg', '13.03.011.jpg', '13.03.012.jpg', '13.03.013.jpg', '13.03.014.jpg', '13.03.015.jpg', '13.03.016.jpg', '13.03.017.jpg', '13.03.018.jpg', '13.03.019.jpg', '13.03.020.jpg', '13.03.021.jpg', '13.03.022.jpg', '13.03.023.jpg', '13.03.024.jpg', '13.03.025.jpg', '13.03.026.jpg', '13.03.027.jpg', '13.03.028.jpg', '13.03.029.jpg', '13.03.030.jpg', '13.03.031.jpg', '13.03.032.jpg', '13.03.033.jpg', '13.03.034.jpg', '13.03.035.jpg', '13.03.036.jpg', '13.03.037.jpg', '13.03.038.jpg', '13.03.039.jpg', '13.03.040.jpg', '13.03.041.jpg', '13.03.042.jpg', '13.03.043.jpg', '13.03.044.jpg', '13.03.045.jpg', '13.03.046.jpg', '13.03.047.jpg', '13.03.048.jpg', '13.03.049.jpg', '13.03.050.jpg', '13.03.051.jpg', '13.03.052.jpg', '13.03.053.jpg', '13.03.054.jpg', '13.03.055.jpg', '13.03.056.jpg', '13.03.057.jpg', '13.03.058.jpg', '13.03.059.jpg', '13.03.060.jpg', '13.03.061.jpg', '13.03.062.jpg', '13.03.063.jpg', '13.03.064.jpg', '13.03.065.jpg', '13.03.066.jpg', '13.03.067.jpg', '13.03.068.jpg', '13.03.069.jpg', '13.03.070.jpg', '13.03.071.jpg', '13.03.072.jpg', '13.03.073.jpg', '13.03.074.jpg', '13.03.075.jpg', '13.03.076.jpg', '13.03.077.jpg', '13.03.078.jpg', '13.03.079.jpg', '13.03.080.jpg', '13.03.081.jpg', '13.03.082.jpg', '13.03.083.jpg', '13.03.084.jpg', '13.03.085.jpg', '13.03.086.jpg', '13.03.087.jpg', '13.03.088.jpg', '13.03.089.jpg', '13.03.090.jpg', '13.03.091.jpg', '13.03.092.jpg', '13.03.093.jpg', '13.03.094.jpg', '13.03.095.jpg', '13.03.096.jpg', '13.03.097.jpg', '13.03.098.jpg', '13.03.099.jpg', '13.03.100.jpg', '13.03.101.jpg', '13.03.102.jpg']
    },
    {
        titleEn: 'Desmodiym',
        titleRu: 'Desmodiym',
        titleHe: 'Desmodiym',
        date: '2025-03-07',
        items: ['07.03.01.jpg', '07.03.02.jpg', '07.03.03.jpg', '07.03.04.jpg', '07.03.05.jpg', '07.03.06.jpg', '07.03.07.jpg', '07.03.08.jpg', '07.03.09.jpg', '07.03.10.jpg', '07.03.11.jpg', '07.03.12.jpg', '07.03.13.jpg', '07.03.14.jpg', '07.03.15.jpg', '07.03.16.jpg', '07.03.17.jpg', '07.03.18.jpg', '07.03.19.jpg', '07.03.20.jpg', '07.03.21.jpg', '07.03.22.jpg', '07.03.23.jpg', '07.03.24.jpg', '07.03.25.jpg', '07.03.36.jpg', '07.03.27.jpg', '07.03.28.jpg', '07.03.29.jpg', '07.03.30.jpg', '07.03.31.jpg', '07.03.32.jpg', '07.03.33.jpg', '07.03.34.jpg', '07.03.35.jpg', '07.03.36.jpg', '07.03.37.jpg', '07.03.38.jpg', '07.03.39.jpg', '07.03.40.jpg', '07.03.41.jpg', '07.03.42.jpg', '07.03.43.jpg', '07.03.44.jpg', '07.03.45.jpg', '07.03.46.jpg', '07.03.47.jpg']
    },
    {
        titleEn: 'Grand open',
        titleRu: 'Грандиозное открытие',
        titleHe: 'פתיחה חגיגית',
        date: '2025-03-06',
        items: ['06.03.01.jpg', '06.03.02.jpg', '06.03.03.jpg', '06.03.04.jpg', '06.03.05.jpg', '06.03.06.jpg', '06.03.07.jpg', '06.03.08.jpg', '06.03.09.jpg', '06.03.10.jpg', '06.03.11.jpg', '06.03.12.jpg', '06.03.13.jpg', '06.03.14.jpg', '06.03.15.jpg', '06.03.16.jpg', '06.03.17.jpg', '06.03.18.jpg', '06.03.19.jpg', '06.03.20.jpg', '06.03.21.jpg', '06.03.22.jpg', '06.03.23.jpg', '06.03.24.jpg', '06.03.25.jpg', '06.03.36.jpg', '06.03.27.jpg', '06.03.28.jpg', '06.03.29.jpg', '06.03.30.jpg', '06.03.31.jpg', '06.03.32.jpg', '06.03.33.jpg', '06.03.34.jpg', '06.03.35.jpg', '06.03.36.jpg', '06.03.37.jpg', '06.03.38.jpg', '06.03.39.jpg', '06.03.40.jpg', '06.03.41.jpg', '06.03.42.jpg', '06.03.43.jpg', '06.03.44.jpg', '06.03.45.jpg', '06.03.46.jpg', '06.03.47.jpg', '06.03.48.jpg', '06.03.49.jpg', '06.03.50.jpg', '06.03.51.jpg', '06.03.52.jpg', '06.03.53.jpg', '06.03.54.jpg', '06.03.55.jpg', '06.03.56.jpg', '06.03.57.jpg', '06.03.58.jpg', '06.03.59.jpg', '06.03.60.jpg', '06.03.61.jpg', '06.03.62.jpg', '06.03.63.jpg', '06.03.64.jpg', '06.03.65.jpg', '06.03.66.jpg', '06.03.67.jpg', '06.03.68.jpg', '06.03.69.jpg', '06.03.70.jpg', '06.03.71.jpg', '06.03.72.jpg']
    }]