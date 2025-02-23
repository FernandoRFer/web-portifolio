'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "05c76b01fa7509e44473b00baa7abe6e",
".git/config": "4d9b204d7f575c9087b31cba124bcb99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "99e9c4a1443bb3b1903c42542ce59ca2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6880024161e0d0c55e0656f495da3e1b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e668b4bff2e6bd8469a0a9fcaef9b2bc",
".git/logs/refs/heads/main": "e668b4bff2e6bd8469a0a9fcaef9b2bc",
".git/logs/refs/remotes/origin/main": "fa7a46d37e9cffea8ce4ec5c5cb82ccb",
".git/objects/07/1382c67da6df7653d048eb3d8cc5f1672056a1": "e759d3dc072d6578355ab8aa03540666",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/ffcf4164cec9ed4fad569628ceff2aa9943d8f": "414d622090544699b2250a2796e50824",
".git/objects/11/f5ae963a72c80e76332c8f93c89223f62ed28b": "806b99d020d100527a43717fdcf1e8dc",
".git/objects/1a/027edd1f572ec2b9326a307dad9a1c1f9f00b5": "885bb1fb80ac6ede1b994be634e98ba6",
".git/objects/1b/5cc057eb6ff0a7aad2fffdd1cb657eda18e59c": "0618c7f29467870788072777cdd8e351",
".git/objects/1c/3b97049a38bcf14d5d669b86fbde6cf09ae412": "0411fa8e0febeaa1015179cfb4fededf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/63df9e0068e5a8e25c11e4d7baf0e9c86192b5": "e0dbeca8dd746227c5a53eb1d36c8e85",
".git/objects/22/7abe1f6278854483cade3f974ee74bd1f9e84f": "5cf8cc98138fce76bd09606db6e5325c",
".git/objects/22/a77626cfdb7d9e250cc70700b5857441e80f6c": "14c6008f698fcd49d17aa5c3c0d1d011",
".git/objects/26/a95dadf0ee09fc7a848916f3e26c7f6c0924bc": "bba25fa7c6b00c900f10d23c67511e9e",
".git/objects/27/e47c517280ec04ca1f70fcfdc8bc05f0d877cd": "fe940b2fd8a1f68679dc5749abd4064c",
".git/objects/29/7086b6fe897c95e25ad56a9bf6dae185d3e22a": "1788591f24a01dfc7194c35d45b46b78",
".git/objects/30/e212486bb3bd0a4f2e7cc34e45bb7f30b894dc": "d0d5197cde7cd0256686e217bb95dd46",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/36/775f4d513480d98c1b1f4f169af77e04359fc1": "0166e5e4505a2b0a7c2630f3b238592f",
".git/objects/37/88b36624dd3cb178b14fe2433c8c0e8ce1f2f2": "d9473184ab4f3f0a378dfd1f8c522279",
".git/objects/37/c80d340e3e9e4ad9aacd02fe9bd81543f5cf86": "2c2760112444fa8d9d55a0fa29372fc6",
".git/objects/37/c99dd5068a2d3599f578971568c7dda47dafd7": "e491e09aa3632ad6b79c471918b9edb1",
".git/objects/39/df0b1f98cf1337f4a05edde50cf3693ca3f5ac": "c3339542c8643adbff7fde292883439d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/91f56da0d1114818eb3c8e9380800c1dc17566": "ac73a41733b6acdb8f369258d02cbbd4",
".git/objects/3c/d33458b92677f1baa657e3aae70cb2a10dcb68": "1950abfccdf588a28ee92cc1b3d2c828",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/97a3c2b218d208713ef23309361e7966ffbb87": "9db6758c33a3829755b8f9bcd6eb12dd",
".git/objects/46/a2c40ad8b2ff3f72fe354142109a045f49f3ad": "c592dd7d3845e19e8a26bba2f9c97201",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/0f816030d8e38fa438beb1fb972a513a710f7d": "1ee1fd02a12c9d3cb7033ec4c2c0a4ad",
".git/objects/4d/60c717c89efffd7dfd4f6ba577acd6de34ef21": "00322281c603d55fe907979419627388",
".git/objects/4d/845664cacbf80419240e0b985e206327c228bd": "7643cba679fa50b4dd8c51ffc340a3dd",
".git/objects/53/6fb214574e90ec2eac7bb4a53509aa390453f6": "e4f08e8cbdbbeb991dba8dd1421cbe7f",
".git/objects/53/9f9c57ed5dcc32b32ebdb16ae4464bfc29d24f": "56abdf05fef098ce811f3651916524ca",
".git/objects/55/3909b069270dd9243961d4f915095f5534c385": "c3b5a348027acb4d1bda5a52174a785f",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/bf1d01ff1d55ea77352041c136c39cc656c36f": "b6d481b1fa4ae67e16ae4570e2223f58",
".git/objects/58/ed77f25e73a2f1b0973cdf4e25d7ddd7eefd4e": "eb0b5af5c5917770f7f19a9a86bda4b0",
".git/objects/59/03d456df37c526f21856dae74748400dcc24c2": "3010bce266707ebd37bb3f4f41cfb212",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/5a/278b697fd03c7a10625fcc58b0034ad9a9d2d2": "32bd782c52906d2d1a96a83738e417ec",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/63/ce602f157506cc0b6760fe21c1cb264c7caeb6": "b878d28023fa625a35375eee19df0cd9",
".git/objects/64/8756edc078aa9dfb88dc5806acc4f00b98d83b": "23a100bb6d5eedd7749a8eb3d19d6c7a",
".git/objects/65/3c0c37e69067bb9089586327a45ba5594c96a4": "edb52cd81ec6d138ddd0439bd7cad434",
".git/objects/65/96e1783045c0d00761ced0be6ac034cf281e78": "dec6552b9c6bce2ac9715b7c30474e84",
".git/objects/67/73324556d7df1156a6fc8cd529140fe9c625ad": "0c620a212a2258f8aed9846d79825c42",
".git/objects/69/eb6ab4cbe040bac0b69352e0dda7a0b7134439": "0f9d9cb154105b5d85e64861ec723092",
".git/objects/6a/5b4ea30321fe4fd5c49769d19acfcf42ce03a5": "45756469eafe6c2116d1598ec6c7469d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/46f79ca465fa19b075681757525e39de811771": "36d00afa18b5ccdb9b90f90f5d7c1cc0",
".git/objects/7b/d2884a1373d2bbeff441567d981d486543144d": "ab1ebedfb1918967ee6dd316b9bef06f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/c3552a623fae994cecc08c56ec15ff87e0cdef": "e0c7a4899d7a0ac846467640fdfc45f7",
".git/objects/7d/4229773fd1d317f37c4351696ecc76a4ec3111": "235aeb87e9093b85bd90b6990894ed84",
".git/objects/7e/f9a31a4caee66c8b101baac5c469e007dd7f69": "1e210b55220818f1b2d3f84f3ab65dbc",
".git/objects/82/ac087d2ea5a7b3f7321937e959fa3ce3a3c157": "cb143c72441f75cbf8307c9c19bf7f7f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/765465e720be59225ff68c915198c54c9319e0": "9c73ce618bf791b2a3bc57593d9197ae",
".git/objects/86/903bad1144cbdc75117c28ba5469271a2b21e2": "04a37cf322c6e401642a1fa20b6f516a",
".git/objects/87/4ec5de4b407fc0bd1a2ae5717ddaa3419173bd": "37aadc5d372aa191949f0f47d74bc9bc",
".git/objects/87/f9d4d76a7d4178618fbd30596a100a9cb8091d": "e1b94c194efa2e814e68633ff3ce79b2",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ac93378822b6e0397a9e994cadab90be48469c": "dccc6d931094361f5444a67705b290f7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/d2b6a275483d95167465343529ded673f6fb04": "5ab85ca821192684a1c8cac00c3db941",
".git/objects/95/cc08c8db0da6c99ae2baa4a80cc7f7639f5f17": "900bb28526f5a91e41941806e5f5b8d2",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/d80420ad9f8c3274221edc98c7c519cd7937bd": "6c3683732b33f4de872b8f90e9b00dea",
".git/objects/99/6ca01086ed2de67a5ba7d7556a1cd1ac6a4077": "6ca505145da2b6d238e74a7f58cf6a04",
".git/objects/9b/0d016bd9e1fa1ed59923c00a5d6b46a6589a2f": "9f2832e249c7a1f0623b22532f5886ca",
".git/objects/9f/49deec936e82d4b3092fa45c1c9868ca54ca02": "16dd0750dd442af5e0ff09635030e5c6",
".git/objects/a1/fa032a4a7340e61c71c504a2f3fd665caaa79c": "c124e3b4f58399837ed11b9967629bc1",
".git/objects/a2/9f57f9fb8fa7f7489b839876f058b458ad33b5": "71f83b58e0bcfffe237f79f372362a40",
".git/objects/a4/2b9410fc295d09056573a49358cc9851b28602": "329166fac88929464eeb15da0759f5a6",
".git/objects/a5/0ca75da671b404f946534161c47f32359ac9ef": "f32d6e3d22c8d30b7326992e854f2b4c",
".git/objects/a5/dbce86d238c56796ad04d199470e0bbefc6a60": "11d548aa8218b9e103905e444db14ba6",
".git/objects/a6/3f4ae263abfa0f78d687a2e8b19a55b79796fe": "800da2e415420e599c781c3fe8ac80fc",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/5b29aa4bbf3b8ee9fc4362a97fbb73039d5c58": "6dafe8c45117fbcc8ad0b68ba501a750",
".git/objects/a8/939bc2211677532b28c37206300ff0ce144e9f": "c1d6a53161dd73a49ace132f5d8a216e",
".git/objects/af/b2bc574151754d678472eaac6648baeaebe7e0": "dc406f877847f712b94f49cca63128a1",
".git/objects/b0/0bf17b77adefb2c7b07905b0b38f36d07cbb88": "e310822d4f0d9b7d8b98f8480c7d7d7a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/e39c1da67d0b8655f82b086539838e33d24d93": "7694a277b97697b4b667112beda8036a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0bdb66da501986cb05a742a63e604a46bd6202": "2631443f0f94af0b116af5c1423744ab",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/ade7ed51563254d83e393dc54ca14ca667cc86": "c73a0263f95483a5e2af9467eac79798",
".git/objects/be/ebc4239e873612a52027d3846f8275ca830940": "2a6f2f1bb6152e551f89faf275dbb671",
".git/objects/c0/3fcf2fc6018331c0276bae3830f8c2f4796baf": "4fb7df22d600db6a3ed20cc176330e13",
".git/objects/c3/9d13f1d6c6a89abd998b38663d93e5636c48c8": "6141f4b23b32955e585646d4cc8d73dc",
".git/objects/c3/cfcc6d20679370a9a400d425c67b7406f76531": "ebb68e611664890f5e785374a4568bbd",
".git/objects/c5/eac74572f70dba302e8538a10275c09268de5e": "7241caca6158b0f8ec47e90d81554e0a",
".git/objects/c5/fcc0461881c20c7c2f2b701251ec6bd7f0c88f": "17124b8c748d4f8027c6d28e61790faf",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/0cfb78df0dfd77c440e3ae9dbb5bcc921d149f": "39239f9b182cd8e778e5f3f275cbd54b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/911234974ec4c19eeef814d5fb9f0f16e8ebd9": "cf263c0309ad2209dc9215c42e028f0b",
".git/objects/cf/85d5a3b58ce73b7a251c88dedeeac5bc9cc733": "4cde44534d837c67e37e5af4bb5e7235",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/176e5de52116f398cfb5c72be446e898930258": "9c0cb4ae853981fc246c2df08206803d",
".git/objects/d8/8fdfcfc7b739631c3e09895bdaececdfef74ef": "bf96358b188b7821cdf4d6d7f7815237",
".git/objects/d8/974da740aeb9831bc3682eb1b5e4290c8bd1e6": "134c0b92e87ea5306b9c6d1c97083196",
".git/objects/d8/b08a8850139534c99382b4b7c46b34a59fad0e": "dac07ca5c461bcf9f71b50a59a93e0e4",
".git/objects/da/d3c5e490722721a9e223d40d2ddf297a130997": "68adadf325d73e719c8fa956a802673d",
".git/objects/da/f3582601550ed61b30fa39bf02e940c0be6e61": "6e2bd6998fca0b5d608f6d8a22ef4262",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e0/8ee1fc3904b5254440de78d9b4660131014d9b": "512b1ed62086e83034c05635751dff16",
".git/objects/e4/b070989892405d72c244b0654c5e331b2ee737": "8cdc504f686d69af853ea9ccf32542b1",
".git/objects/e4/fbb0894233ae1c16b21685264211179648f52a": "116001f00bac770f7c852d9a820842b1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e24e5a596bc1a2a53d967115372316758fb7c1": "ae4cc3dce7bd69d91c991cb8ab227411",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/33a6cd683ce9d87f2f34e3eed9b03279b1c598": "421bab818c43a895de3b23e53ac14af9",
".git/objects/f8/1181f71cbf2a4d4c315fe18517db5cc8e33848": "2e414f83aba66aa15de051fc47292581",
".git/objects/f8/892191c05bf52b72f617cfb42ac1ae42bd8c46": "62fc1f6e958a9e923d050ebca4d98caa",
".git/objects/f9/69dcc3a48c2e9bc956c1d547bc79de2ae2edb6": "e8934493b0a4e78e879d54afca01e866",
".git/objects/fa/0da6085065fb9ee32671e5385046125347331b": "4d8fb9dc5bc7745ea7db0c5cf9208d90",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fc/06e028e2952c42de2a351f1bea71d2fc48c088": "696ed63f0414c08e7de983062b8ad3fd",
".git/objects/fd/ff366126b32f044b400e89a43164221cceddd1": "0e06c31c874c9fed4f1284d422a7b1f9",
".git/ORIG_HEAD": "ba40a597b506e0487675a900fd80e5df",
".git/refs/heads/main": "fe06616f847b75831a1bfee83e53e615",
".git/refs/remotes/origin/main": "fe06616f847b75831a1bfee83e53e615",
"assets/AssetManifest.bin": "66864b9ec1af62e700b0bb94743e0063",
"assets/AssetManifest.bin.json": "931e61794fbeef5aa20e0b63f66f3755",
"assets/AssetManifest.json": "68e117372cc1f32c63b751cb5816a3a1",
"assets/assets/fonts/Chunk.ttf": "121c0534a4638305bbe716625832a5ba",
"assets/assets/fonts/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/fonts/Metropolis-Thin.otf": "152ab0324f4452c56f2622dc6262e9b6",
"assets/assets/image/foto-perfil.jpg": "69c40d62bd8f2b2111cd20f80dc3a0b9",
"assets/assets/image/foto.jpg": "a107d215af0638407f3615d932a18ca6",
"assets/assets/image/fundo.jpg": "98754214baaeeedf55b1b65fe82d1ffc",
"assets/assets/image/IMG_5513-Editar.png": "19de513404ce21ee130991ebd2fc5dd1",
"assets/assets/image/mobile-flutter.png": "0beb64d3519131355f6b29a16962d615",
"assets/assets/image/mobile-profile-white.png": "57a86e50a3b4d2a3122b54e658655997",
"assets/assets/image/mobile-profile.png": "3cda2faa35c11feabd5f879c4ecd7d5f",
"assets/assets/logo/api_Logo.png": "38598c46ab174db17fd7687a67ec52ad",
"assets/assets/logo/Azure-functions.png": "2cb88bc0ee640703b8df790140da01ab",
"assets/assets/logo/Bd_Logo.png": "7e075bf9adfb671587f7dd76bb4bb460",
"assets/assets/logo/Csharp_Logo.png": "db57839e40e03bd671375bc623b9b4cf",
"assets/assets/logo/Dart_Logo.png": "9ca03b2ba3f2995f6f8d5c760294e087",
"assets/assets/logo/email_logo.png": "eb7e902ad140286730925bbe370ada7b",
"assets/assets/logo/Flutter_Logo.png": "b36c58c1f2e860299dbaae8e030a85bb",
"assets/assets/logo/github.png": "d956d000d8810d40402d5ea824f5355a",
"assets/assets/logo/githubbranco.png": "8568666357cb44e8ebd376b0d81ae847",
"assets/assets/logo/GitHub_Logo.png": "1d626624f9aa72d8d04d2983151e6765",
"assets/assets/logo/github_preto.png": "7433692cabbfa132f34adb034e7909fa",
"assets/assets/logo/inverted_logo_linkedin.png": "5cc063075a715e966ed0b6b7e16f6997",
"assets/assets/logo/kotlin.png": "759bfdeea60435b707ffa369ecd7f0ba",
"assets/assets/logo/linkedin.png": "3017ae54755ac48f9585bac8b01fdf15",
"assets/assets/logo/logo-2.png": "5b0925d916a442e222639c89d11f7046",
"assets/assets/logo/logo.png": "c2e129a225dc38f7e5eb549fb0f72530",
"assets/assets/logo/logolinkedin.png": "6b11303872207d20218914041afa21ed",
"assets/assets/logo/logowhatsappbranco.png": "f43755c648afa7724dce05c894bc1ac1",
"assets/assets/logo/logo_linkdin.png": "ebe1062b79169b93c029ee70ffbe4fef",
"assets/assets/logo/Whatsapp.png": "3650f49a9d501efa6b62c1c08f714d16",
"assets/FontManifest.json": "b1f76825ad4d6c7b7e467810eb11f80f",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3ee11b15dc003b295217d1e4105e29f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "eca659b9d96eafbd907a88cac387d2bb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo-2.png": "5b0925d916a442e222639c89d11f7046",
"index.html": "91a131603bf336fc9b0a6142221594d7",
"/": "91a131603bf336fc9b0a6142221594d7",
"main.dart.js": "30a98d0f685590bbeca68058daa38300",
"manifest.json": "a3a1004fc15b34c1680e559c5d87f309",
"version.json": "061068e2c9bf138d06622981ae841092"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
