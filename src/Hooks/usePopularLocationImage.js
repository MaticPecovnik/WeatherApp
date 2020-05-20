const usePopularLocationImage = (name) => {
  const locationImages = [
    {
      locationName: "Kinshasa",
      imageUrl:
        "https://afriquemagazine.com/en/sites/afriquemagazine.com.en/files/styles/image_article_detail/public/Untitled-7_0%20%281%29.jpg?itok=piBfxcv_",
    },
    {
      locationName: "Santiago",
      imageUrl:
        "https://www.weather-atlas.com/weather/images/city/9/7/575979-1500.jpg",
    },
    {
      locationName: "Dhaka",
      imageUrl:
        "https://static.toiimg.com/photo/64667958/dhaka-city.jpg?width=748&resize=4",
    },
    {
      locationName: "Beijing",
      imageUrl:
        "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2019/08/19/9329f6da-c1bf-11e9-8f25-9b5536624008_image_hires_202807.JPG",
    },
    {
      locationName: "Bogota",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Bogota_Skyline.jpg",
    },
    {
      locationName: "Berlin",
      imageUrl:
        "https://www.mmturist.si/image/cache/catalog/images-hires/berlin-city-break-750x400a.jpg",
    },
    {
      locationName: "Cairo",
      imageUrl:
        "https://cdn.kimkim.com/files/a/content_articles/featured_photos/468b409b71c120bacfe4416f272cff166c4eadd5/big-173759f14285b3f970a963464a88cd82.jpg",
    },
    {
      locationName: "Madrid",
      imageUrl:
        "https://www.vandraj.si/wp-content/uploads/2016/11/madrid_shutterstock_143885179.jpg",
    },
    {
      locationName: "London",
      imageUrl:
        "https://govorise.metropolitan.si/media/cache/upload/Photo/2017/12/30/london-1_i940x530.jpg",
    },
    {
      locationName: "Athens",
      imageUrl: "https://miro.medium.com/max/1000/1*T0gd5udoXS-NlExFpAQXYQ.png",
    },
    {
      locationName: "Hong Kong",
      imageUrl:
        "https://www.opensignal.com/sites/opensignal-com/files/styles/market_insight_featured_large/public/data/images/national/data-2020-05-hongkong/hong_kong_0.png?itok=hQtLNOXJ",
    },
    {
      locationName: "Jakarta",
      imageUrl:
        "https://pix10.agoda.net/hotelImages/812/8126/8126_17021016250050910141.jpg?s=1024x768",
    },
    {
      locationName: "Dehli",
      imageUrl:
        "https://cdn.tourradar.com/s3/tour/1500x800/154696_881100ff.jpg",
    },
    {
      locationName: "Baghdad",
      imageUrl:
        "https://cdn.britannica.com/01/154501-050-1D1B61CE/Baghdad-city-Iraq-Tigris-River.jpg",
    },
    {
      locationName: "Tokyo",
      imageUrl:
        "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/24/2020-03-24-tokyo-thumbnail-01.jpg",
    },
    {
      locationName: "Seoul",
      imageUrl:
        "https://www.worldwhiskyday.com/wp-content/uploads/2016/11/iStock_32991480_XXXLARGE.jpg",
    },
    {
      locationName: "Mexico City",
      imageUrl:
        "https://s3-eu-central-1.amazonaws.com/whatdesigncando/app/uploads/20180709133948/BellaArtes.jpg",
    },
    {
      locationName: "Moscow",
      imageUrl:
        "https://cdni.rbth.com/rbthmedia/images/2019.12/article/5e06064c85600a71255af1f7.jpg",
    },
    {
      locationName: "Riyadh",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Riyadh%2C_Saudi_Arabia_%282048x1367%29_%2836864830374%29.jpg",
    },
    {
      locationName: "Singapore",
      imageUrl:
        "https://ramboll.com/-/media/images/rgr/markets/buildings/s/singapore-1360x765.jpg",
    },
    {
      locationName: "Bangkok",
      imageUrl:
        "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg",
    },
    {
      locationName: "Hanoi",
      imageUrl:
        "https://www.tripsavvy.com/thmb/Vk9SR0Hj-_WWamBLZpt8wvwS16A=/3435x2576/smart/filters:no_upscale()/view-over-hanoi--vietnam-525833203-5ad7a2618e1b6e0037b89da8.jpg",
    },
    {
      locationName: "Sydney",
      imageUrl:
        "https://lp-cms-production.imgix.net/2019-06/65830387.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    },
    {
      locationName: "Shanghai",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Shanghai_skyline_from_the_bund.jpg",
    },
    {
      locationName: "Bengaluru",
      imageUrl:
        "https://i2.wp.com/inc42.com/wp-content/uploads/2017/09/bengaluru.jpg?fit=670%2C446&ssl=1&resize=1200%2C900",
    },
    {
      locationName: "Mumbai",
      imageUrl:
        "https://media.cntraveller.in/wp-content/uploads/2020/03/Mumbai-lockdown.jpg",
    },
    {
      locationName: "Kolkata",
      imageUrl: "https://www.holidify.com/images/bgImages/KOLKATA.jpg",
    },
    {
      locationName: "Lima",
      imageUrl:
        "https://i1.wp.com/roadsandkingdoms.com/uploads/2019/05/shutterstock_1047718252-1300x974.jpg?w=2400&quality=95&strip=color&ssl=1",
    },
    {
      locationName: "Istanbul",
      imageUrl:
        "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/IST/ist-istanbul-port-2.jpg",
    },
    {
      locationName: "Los Angeles",
      imageUrl:
        "https://s.hdnux.com/photos/01/11/47/50/19298838/3/rawImage.jpg",
    },
    {
      locationName: "New York",
      imageUrl:
        "https://potovanja-pisanec.si/wp-content/uploads/2019/12/NY-Naslovna.jpg",
    },
    {
      locationName: "Buenos Aires",
      imageUrl:
        "https://pix10.agoda.net/hotelImages/4877634/0/db7ebdd6192005597fb67a0632c3a153.jpg?s=1024x768",
    },
    {
      locationName: "Kabul",
      imageUrl:
        "https://i0.wp.com/www.circleofblue.org/wp-content/uploads/2018/05/Kabul_Houses_on_Mountain_side_-_panoramio.jpg?fit=1600%2C1071&ssl=1",
    },
    {
      locationName: "Havana",
      imageUrl:
        "https://www.belivehotels.com/imagenes/landings-tematicas/habana-colorida-coche-verde_1600x1090.jpg",
    },
    {
      locationName: "Paris",
      imageUrl:
        "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$",
    },
    {
      locationName: "Manila",
      imageUrl:
        "https://1u0b5867gsn1ez16a1p2vcj1-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/manilla.jpg",
    },
    {
      locationName: "Belgrade",
      imageUrl:
        "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2019/06/24104538/Belgrade-Night-Panorama.jpg",
    },
    {
      locationName: "Dakar",
      imageUrl:
        "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2019/05/23/2019-23-05-Get-To-Know-Dakar-featured.jpg",
    },
    {
      locationName: "Cape Town",
      imageUrl:
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/South%20Africa/Cape%20Town/cape-town-guides-lead.jpg",
    },
    {
      locationName: "São Paulo",
      imageUrl:
        "https://www.avianca.com/content/dam/avianca_new/destinos/gru/br_gru_ciudad_2880_1620_01.jpg",
    },
    {
      locationName: "Toronto",
      imageUrl:
        "https://lh3.googleusercontent.com/proxy/5jYF7yQn3L0uSzjwT3lvJ3DFmehw7Cd-t3cm5nDQNSSmxaqijukmt4T2SSBMKHZx_lbDzKz6hUBu476baWG93t62bc17jwThVCk1-vGXZ_nXc8UzZSwICm3ogSINtTCCDaK-i6Lb0mSTz8J0TsQ",
    },
    {
      locationName: "Osaka-shi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Central_Osaka.jpg/610px-Central_Osaka.jpg",
    },
    {
      locationName: "Amsterdam",
      imageUrl:
        "https://www.vandraj.si/wp-content/uploads/2019/02/amsterdam_nizozemska_povratni_let1.jpg",
    },
    {
      locationName: "Stockholm",
      imageUrl:
        "https://www.citylife.si/storage/image/201910//standard/1_6.jpg",
    },
    {
      locationName: "Reykjavik",
      imageUrl:
        "https://www.azamara.com/sites/default/files/heros/reykjavik-iceland-1800x1000.jpg",
    },
    {
      locationName: "Karachi",
      imageUrl: "https://i.dawn.com/primary/2019/03/5c962c421152e.jpg",
    },
    {
      locationName: "Taipei City",
      imageUrl:
        "https://image.taiwantoday.tw/images/content/img20190711161723438_800.jpg",
    },
    {
      locationName: "Jerusalem",
      imageUrl:
        "https://www.touristisrael.com/wp-content/uploads/210910570-4.jpg",
    },
  ];

  let imageUrl;
  locationImages.forEach((el) => {
    if (el.locationName === name) {
      imageUrl = el.imageUrl;
    }
  });
  return imageUrl;
};

export default usePopularLocationImage;
