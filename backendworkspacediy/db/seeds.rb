# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Guide.destroy_all 

g1 = Guide.create(title: "How to Cut Your Own Hair", category: "Grooming", img_url: "https://media1.bonnegueule.fr/img/cms/fiches/405/_MG_0465.jpg")
g2 = Guide.create(title: "How to Build a Step Stool", category: "Carpentry", img_url: "https://www.familyhandyman.com/wp-content/uploads/2018/07/P1055055.jpg")
g3 = Guide.create(title: "How to Make Body Soap", category: "Hygiene Products", img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/diysoap-6-cure-885-1515511021.jpg?resize=768:*")
g4 = Guide.create(title: "How to Make Dishwashing Liquid", category: "Cleaning Products", img_url: "https://images.squarespace-cdn.com/content/5cabed640490796a7f3a1668/1555025499648-8EKL7ZOZ7KGN3NNEH1P1/dish+detergent.jpg?content-type=image%2Fjpeg")
g5 = Guide.create(title: "How to Apply Makeup", category: "Beauty", img_url: "https://i.pinimg.com/236x/49/55/ac/4955ac694b069a25a68635383084ea50.jpg")
g6 = Guide.create(title: "How to Trim Your Beard", category: "Grooming", img_url: "https://www.usa.philips.com/c-dam/b2c/male-grooming-experience-center/master/shaving/how-to/perfect-neckline-article-result.jpg")
g7 = Guide.create(title: "How to Apply Mascara", category: "Beauty", img_url: "https://bloximages.newyork1.vip.townnews.com/news-journal.com/content/tncms/assets/v3/editorial/4/f8/4f869eec-44c0-11e8-aa65-2302eddcfb3e/5ada242acc664.image.jpg?resize=750%2C420")
g8 = Guide.create(title: "How to Install a Muffler", category: "Automotive", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd250LWHXCFb5zDp-fk-4nmjndB-ptHxHeIgKzDmAtH7KiXEaE&usqp=CAU")
g9 = Guide.create(title: "Make a Portable Solar Phone Charger", category: "Electronics", img_url: "https://cdn.instructables.com/FLD/3UOH/HGH70CUZ/FLD3UOHHGH70CUZ.LARGE.jpg?auto=webp&frame=1&width=320")

