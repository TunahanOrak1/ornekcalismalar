// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', (event) => {
    // Arama giriş kutusunu seç
    let searchInput = document.getElementById('searchInput');
    
    // Arama giriş kutusunda "keydown" olayını dinle
    searchInput.addEventListener('keydown', function(event) {
        // Eğer basılan tuş "Enter" ise
        if (event.key === 'Enter') {
            // searchH2 fonksiyonunu çağır
            searchH2();
        }
    });
});

function searchH2() {
    // Kullanıcı tarafından girilen arama terimini al
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Tüm içerik div'ini ve içindeki div elementlerini seç
    let contentDiv = document.querySelector('.content');
    let divElements = contentDiv.getElementsByTagName('div');
    let resultsDiv = document.getElementById('results');
    
    // Önceki arama sonuçlarını temizle
    resultsDiv.innerHTML = '';

    // Hiçbir sonuç bulunamazsa tüm içerik gizlenir
    let hasResults = false;

    // Her div elementinde arama terimini kontrol et
    for (let div of divElements) {
        // div elementinin içindeki tüm h2 elementlerini al
        let h2Elements = div.getElementsByTagName('h2');
        
        for (let h2 of h2Elements) {
            // Eğer h2 elementinin içeriği arama terimini içeriyorsa
            if (h2.innerText.toLowerCase().includes(searchTerm)) {
                // Sonuç bulunduğunu belirtmek için hasResults'u true yap
                hasResults = true;

                // Eşleşen div elementini sonuçlara ekle
                let resultDiv = document.createElement('div');
                resultDiv.classList.add('result');

                // div elementini kopyalayıp resultDiv'e ekle
                resultDiv.appendChild(div.cloneNode(true));

                // Sonuç div'ine resultDiv'i ekle
                resultsDiv.appendChild(resultDiv);

                // Daha fazla h2 kontrol etmeye gerek yok, bir eşleşme yeterli
                break;
            }
        }
    }

    // Eğer eşleşen sonuç yoksa, bir mesaj göster
    if (!hasResults) {
        resultsDiv.innerText = 'Sonuç bulunamadı.';
    }

    // İçerik div'ini gizle ve sadece sonuçları göster
    contentDiv.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
}

function resetSearch() {
    // Arama girişini temizle
    document.getElementById('searchInput').value = '';

    // Tüm içerik ve sonuçları yeniden göster
    document.querySelector('.content').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('results').innerHTML = '';
}
