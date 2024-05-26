import {PostWithRelations} from "./Types";

export const samplePosts : PostWithRelations[] = [
    // {
    //     id: 1,
    //     title: "One Item, Three Ways: Styling Challenge",
    //     text: "Calling all fashion enthusiasts! Are you up for a styling challenge? In this thread, we're challenging you to style one specific clothing item in three different ways and share your outfits with the community. Whether it's a classic white shirt, a versatile denim jacket, or a statement pair of sneakers, the possibilities are endless! Get creative, think outside the box, and show us how you can rock the same item in multiple looks. Whether you're a minimalist, a maximalist, or somewhere in between, we can't wait to see your styling skills in action!",
    //     likes: 9,
    //     createdAt: "5/3/2024",
    //     username: "StyleChallenger",
    //     commentCount: 1,
    //     tags: ["new", "announcements"],
    //     postImgUrl: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=3255&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // },
    // {
    //     id: 2,
    //     title: "Tailoring 101: When and How to Tailor Your Clothing?",
    //     text: "They say the devil is in the details, and when it comes to men's fashion, a perfect fit can make all the difference. In this thread, let's talk about the art of tailoring and how it can elevate your style game to the next level. Whether you're getting a suit tailored for a special occasion or hemming your jeans for the perfect length, tailoring can help you achieve a polished and put-together look that's sure to turn heads. Share your tailoring tips, tricks, and experiences, and let's help each other look our best in every outfit!",
    //     likes: 20,
    //     createdAt: "5/1/2024",
    //     username: "TailorExpert",
    //     commentCount: 10,
    //     tags: ["new", "lounge"],
    //     postImgUrl: 'https://images.unsplash.com/photo-1633655442168-c6ef0ed2f984?q=80&w=3091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // },
    // {
    //     id: 3,
    //     title: "Summer Outfit Ideas for Outdoor Events",
    //     text: "Summer is here, and that means outdoor events are in full swing! Whether you're headed to a music festival, a beach party, or a backyard barbecue, it's important to look cool and stay comfortable in the summer heat. In this thread, let's share our favorite summer outfit ideas for outdoor events. From breezy linen shirts to lightweight chino shorts, there are plenty of stylish options for staying cool and looking sharp in the summer sun. Share your outfit inspiration and tips for dressing to impress at all your favorite summer events!",
    //     likes: 14,
    //     createdAt: "4/25/2024",
    //     username: "SummerStyleFan",
    //     commentCount: 9,
    //     tags: ["lounge"],
    //     postImgUrl: 'https://images.unsplash.com/photo-1610401163517-a94e0a20844f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // },
    // {
    //     id: 4,
    //     title: "Trends in Men's Streetwear",
    //     text: "Streetwear is more than just a fashion trend—it's a cultural movement that's constantly evolving and pushing boundaries. In this thread, let's discuss the latest trends in men's streetwear and share our thoughts on what's hot (and what's not) in the world of urban fashion. From oversized hoodies to chunky sneakers, there's always something new and exciting happening in the world of streetwear. Share your favorite brands, styles, and street style inspiration, and let's keep the conversation going!",
    //     likes: 5,
    //     createdAt: "4/20/2024",
    //     username: "StreetStyleGuru",
    //     commentCount: 4,
    //     tags: ["lounge", "trending"],
    //     postImgUrl: 'https://images.unsplash.com/photo-1602078019624-f4355d0687fd?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // },
    // {
    //     id: 5,
    //     title: "Dressing for Different Body Types.tsx",
    //     text: "Let's talk about body positivity and inclusivity in men's fashion! We all come in different shapes and sizes, and it's important to embrace and celebrate our unique bodies. In this thread, let's share our best styling tips and tricks for dressing different body types. Whether you're tall, short, slim, muscular, or anything in between, there are plenty of ways to accentuate your best features and feel confident in your clothes. Let's support each other and create a more inclusive fashion community!",
    //     likes: 18,
    //     createdAt: "4/5/2024",
    //     username: "BodyPositiveFashion",
    //     commentCount: 7,
    //     tags: ["lounge"],
    //     postImgUrl: 'https://images.unsplash.com/photo-1633655442164-da26330e85b4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // },
    // {
    //     id: 6,
    //     title: "Product Review: Best Men's Dress Shoes Under $100",
    //     text: "Looking for affordable dress shoes that don't compromise on style or quality? Look no further! In this thread, let's share our reviews and recommendations for the best men's dress shoes under $100. Whether you prefer classic oxfords, stylish loafers, or trendy brogues, there are plenty of budget-friendly options out there. Share your favorite brands, styles, and shopping tips to help your fellow fashion enthusiasts step out in style without breaking the bank!",
    //     likes: 10,
    //     createdAt: "3/25/2024",
    //     username: "ShoeFanatic",
    //     commentCount: 2,
    //     tags: ["review"]
    // },
    // {
    //     id: 7,
    //     title: "Building a Versatile Wardrobe on a Budget",
    //     text: "Hey fashionistas on a budget! Building a stylish wardrobe doesn't have to break the bank. Let's share our best tips and tricks for creating a versatile wardrobe that covers all the essentials without emptying your wallet. From timeless basics to budget-friendly statement pieces, there are plenty of ways to look chic on a budget. Whether you're a thrifting pro or a bargain hunter extraordinaire, join the discussion and help fellow fashion enthusiasts build a wardrobe that's both stylish and affordable!",
    //     likes: 7,
    //     createdAt: "3/10/2024",
    //     username: "BudgetStyler",
    //     commentCount: 5,
    //     tags: ["review"]
    // },
    // {
    //     id: 8,
    //     title: "How to Dress for a Job Interview in the Fashion Industry?",
    //     text: "Calling all aspiring fashion professionals! Landing a job in the fashion industry is about more than just talent—it's also about making a great first impression with your personal style. Let's discuss how to dress to impress for a job interview in the fashion industry. Share your tips, tricks, and outfit ideas for striking the perfect balance between professionalism and style. Whether you're interviewing at a high-end fashion house or a trendy startup, let's help each other make a lasting impression and land that dream job!",
    //     likes: 15,
    //     createdAt: "2/20/2024",
    //     username: "FashionForward21",
    //     commentCount: 8,
    //     tags: ["q&a"]
    // },
    // {
    //     id: 9,
    //     title: "Review: Classic Men's Style Icons",
    //     text: "Let's take a trip down memory lane and celebrate the timeless style of classic men's fashion icons. From the suave sophistication of Cary Grant to the rebellious coolness of James Dean, these iconic figures have left an indelible mark on men's fashion. Share photos, stories, and insights into the fashion choices of your favorite style icons, and discuss how their looks continue to inspire and influence modern fashion trends. Who are your ultimate style icons, and what makes their fashion sense stand the test of time?",
    //     likes: 12,
    //     createdAt: "2/5/2024",
    //     username: "StyleEnthusiast",
    //     commentCount: 3,
    //     tags: ["review"]
    // },
    // {
    //     id: 10,
    //     title: "Best Winter Coats for Style and Warmth",
    //     text: "Hey everyone! Winter is approaching, and it's time to talk about staying warm without sacrificing style. Share your favorite winter coat styles that keep you cozy while still looking fashionable. Whether it's a classic wool overcoat, a trendy parka, or a sleek trench coat, let's discuss which winter coats are the best for both style and warmth. Feel free to share your personal recommendations, shopping tips, and any other insights you have on staying stylish during the colder months!",
    //     likes: 8,
    //     createdAt: "1/15/2024",
    //     username: "Fashionista123",
    //     commentCount: 6,
    //     tags: ["review"]
    // }
]


