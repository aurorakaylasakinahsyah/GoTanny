export const diseaseData = [
    {
        id: 1,
        title: 'Anthracnose pada Apple',
        type: 'Anthracnose',
        plant: 'apple',
        image: 'https://s3-us-west-2.amazonaws.com/treefruit.wsu.edu/wp-content/uploads/2016/06/Bulls-eye-rot.jpg',
        description: 'Penyakit Anthracnose pada apel disebabkan oleh jamur yang dapat merusak buah dan menyebabkan pembusukan.',
        symptoms: ['Bercak coklat pada buah', 'Pembusukan melingkar', 'Spora berwarna pink pada kondisi lembab'],
        prevention: ['Sanitasi kebun', 'Pemangkasan ranting yang terinfeksi', 'Penyemprotan fungisida'],
        treatment: ['Fungisida berbahan aktif mancozeb', 'Pengendalian kelembaban'],
        tags: [
            { icon: 'fas fa-bug', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 2,
        title: 'Alternaria pada Guava',
        type: 'Alternaria',
        plant: 'guava',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cephaleuros_parasiticus.jpg',
        description: 'Alternaria pada jambu biji menyebabkan bercak daun dan busuk buah.',
        symptoms: ['Bercak hitam pada daun', 'Buah membusuk dari ujung', 'Daun rontok'],
        prevention: ['Jaga kebersihan kebun', 'Hindari kelembaban tinggi', 'Jarak tanam yang cukup'],
        treatment: ['Fungisida tembaga', 'Pemangkasan'],
        tags: [
            { icon: 'fas fa-virus', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 3,
        title: 'Rot pada Mango',
        type: 'Rot',
        plant: 'mango',
        image: 'https://thumbs.dreamstime.com/b/mango-fruit-mold-mould-one-structures-certain-fungi-can-form-formation-spores-containing-fungal-secondary-302115966.jpg',
        description: 'Pembusukan pada mangga sering terjadi pasca panen atau saat buah matang di pohon.',
        symptoms: ['Daging buah lunak dan berair', 'Bau busuk', 'Kulit buah menghitam'],
        prevention: ['Panen hati-hati', 'Penyimpanan dingin', 'Perlakuan air panas'],
        treatment: ['Tidak ada obat untuk buah yang sudah busuk', 'Cegah penyebaran ke buah lain'],
        tags: [
            { icon: 'fas fa-bug', text: 'Pembusukan' },
            { icon: 'fas fa-exclamation-triangle', text: 'Beresiko' }
        ]
    },
    {
        id: 4,
        title: 'Anthracnose pada Pomegranate',
        type: 'Anthracnose',
        plant: 'pomegranate',
        image: 'https://content.peat-cloud.com/w400/anthracnose-of-pomegranate-pomegranate-1665753930.jpg',
        description: 'Anthracnose pada delima menyebabkan bercak hitam pada kulit buah dan biji membusuk.',
        symptoms: ['Bercak hitam keras pada kulit', 'Biji membusuk', 'Buah pecah'],
        prevention: ['Bersihkan sisa tanaman', 'Semprot fungisida saat berbunga'],
        treatment: ['Fungisida sistemik'],
        tags: [
            { icon: 'fas fa-virus', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 5,
        title: 'Alternaria pada Apple',
        type: 'Alternaria',
        plant: 'apple',
        image: 'https://bugwoodcloud.org/images/384x256/5524192.jpg',
        description: 'Bercak daun Alternaria pada apel dapat menyebabkan defoliasi dini.',
        symptoms: ['Bercak bulat pada daun', 'Tengah bercak berwarna coklat', 'Daun menguning'],
        prevention: ['Pengelolaan residu tanaman', 'Fungisida protektif'],
        treatment: ['Fungisida Iprodione'],
        tags: [
            { icon: 'fas fa-bacteria', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 6,
        title: 'Rot pada Guava',
        type: 'Rot',
        plant: 'guava',
        image: 'https://www.shutterstock.com/image-photo/guava-fruit-rot-fly-infestation-260nw-1034569393.jpg',
        description: 'Pembusukan buah jambu biji sering disebabkan oleh lalat buah atau jamur.',
        symptoms: ['Buah lunak', 'Ada belatung (jika lalat buah)', 'Bau fermentasi'],
        prevention: ['Pembungkusan buah', 'Perangkap lalat buah'],
        treatment: ['Kumpulkan dan musnahkan buah busuk'],
        tags: [
            { icon: 'fas fa-bug', text: 'Pembusukan' },
            { icon: 'fas fa-exclamation-triangle', text: 'Beresiko' }
        ]
    },
    {
        id: 7,
        title: 'Anthracnose pada Mango',
        type: 'Anthracnose',
        plant: 'mango',
        image: 'https://gdm.id/wp-content/uploads/2023/11/penyakit-antraknosa-pada-mangga-1-300x200.jpg',
        description: 'Penyakit utama pada mangga, menyebabkan bercak hitam pada daun, bunga, dan buah.',
        symptoms: ['Bercak hitam pada daun', 'Bunga rontok', 'Tear stain pada buah'],
        prevention: ['Pemangkasan tajuk', 'Sanitasi'],
        treatment: ['Fungisida Azoxystrobin'],
        tags: [
            { icon: 'fas fa-bug', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 8,
        title: 'Alternaria pada Pomegranate',
        type: 'Alternaria',
        plant: 'pomegranate',
        image: 'https://us-central1-plantix-8e0ce.cloudfunctions.net/v1/image/w400/e0c91b70-f377-46e1-b446-e5668b4941b3',
        description: 'Menyebabkan busuk hati pada buah delima.',
        symptoms: ['Bagian dalam buah membusuk', 'Kulit luar tampak sehat atau sedikit berubah warna'],
        prevention: ['Hindari kelembaban tinggi saat berbunga'],
        treatment: ['Sulit diobati setelah infeksi masuk'],
        tags: [
            { icon: 'fas fa-bug', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 9,
        title: 'Rot pada Apple',
        type: 'Rot',
        plant: 'apple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bitter_rot_on_a_Honeycrisp_apple.jpg/500px-Bitter_rot_on_a_Honeycrisp_apple.jpg',
        description: 'Bitter rot pada apel.',
        symptoms: ['Bercak busuk cekung', 'Rasa pahit pada bagian busuk'],
        prevention: ['Kalsium spray', 'Sanitasi'],
        treatment: ['Fungisida Captan'],
        tags: [
            { icon: 'fas fa-bug', text: 'Pembusukan' },
            { icon: 'fas fa-exclamation-triangle', text: 'Beresiko' }
        ]
    },
    {
        id: 10,
        title: 'Anthracnose pada Guava',
        type: 'Anthracnose',
        plant: 'guava',
        image: 'https://content.peat-cloud.com/w400/anthracnose-guava-1665755294.jpg',
        description: 'Menyebabkan bercak nekrotik pada daun dan buah jambu.',
        symptoms: ['Bercak kering pada daun', 'Buah mengkerut'],
        prevention: ['Sanitasi'],
        treatment: ['Fungisida'],
        tags: [
            { icon: 'fas fa-bug', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 11,
        title: 'Alternaria pada Mango',
        type: 'Alternaria',
        plant: 'mango',
        image: 'https://content.peat-cloud.com/w400/bacterial-black-spot-of-mango-1552661367.jpg',
        description: 'Bercak daun dan buah pada mangga.',
        symptoms: ['Bercak hitam kecil', 'Daun menguning'],
        prevention: ['Jaga kesehatan tanaman'],
        treatment: ['Fungisida'],
        tags: [
            { icon: 'fas fa-bug', text: 'Jamur' },
            { icon: 'fas fa-exclamation-triangle', text: 'Berbahaya' }
        ]
    },
    {
        id: 12,
        title: 'Rot pada Pomegranate',
        type: 'Rot',
        plant: 'pomegranate',
        image: 'https://cdn.pixabay.com/photo/2022/01/15/17/01/pomegranate-6940145_960_720.jpg',
        description: 'Pembusukan buah delima.',
        symptoms: ['Buah lunak', 'Berjamur'],
        prevention: ['Panen tepat waktu'],
        treatment: ['-'],
        tags: [
            { icon: 'fas fa-bug', text: 'Pembusukan' },
            { icon: 'fas fa-exclamation-triangle', text: 'Beresiko' }
        ]
    },
];

export const getDiseaseById = (id) => {
  return diseaseData.find(disease => disease.id === parseInt(id));
};
