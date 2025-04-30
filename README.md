# 🎥 Movie App

Bu, kullanıcıların popüler filmleri görüntüleyip, arama yaparak favorilerine ekleyebileceği bir **React** tabanlı bir film uygulamasıdır. Uygulama, **The Movie Database (TMDb)** API'sini kullanarak film verilerini alır.

## 🚀 Özellikler

- **Popüler Filmler**: Uygulama açıldığında popüler filmleri görüntüleyebilirsiniz.
- **Arama Özelliği**: Filmler üzerinde arama yaparak, istediğiniz film hakkında bilgi alabilirsiniz.
- **Favoriler**: Kullanıcılar, filmleri favorilerine ekleyip çıkarabilirler. Favoriler, tarayıcıda `localStorage` ile saklanır.
- **Responsive Tasarım**: Uygulama, farklı ekran boyutlarına göre uyumlu olacak şekilde tasarlanmıştır.

## ⚡ Kullanılan Teknolojiler

- React: Kullanıcı arayüzünü oluşturmak için.
- React Router: Sayfalar arasında geçiş yapmak için.
- Context API: Uygulama genelinde favori filmleri yönetmek için.
- CSS: Bileşenlere özgü stil dosyalarıyla uygulamanın görünümünü özelleştirmek için.
- The Movie Database (TMDb) API: Film verilerini almak için.

## 🧰 Yapı

- components: Genel bileşenler 
- contexts: Filmlerin favorilere eklenmesi ve çıkarılması ile ilgili mantık (MovieContext).
- css: Tüm stil dosyalarını içerir. Her bileşen için ayrı stil dosyası bulunmaktadır.
- pages: Sayfalar (Home, Favorites vb.).
- services: API bağlantıları ve veri çekme işlevlerini içerir.
- App.jsx: Uygulamanın ana yapısını ve rotaları içerir.
- main.jsx: Uygulamanın başlangıç noktasıdır.

## ✂️ Ekran Görüntüleri

### Ana Sayfa
![main](https://github.com/user-attachments/assets/995f5f53-d202-4560-84f6-d95ae90092ef)

### Arama 
![search](https://github.com/user-attachments/assets/729f6583-aed8-4bd8-8a85-f8f8cdd09d89)

### Favoriler
![favorites](https://github.com/user-attachments/assets/0c798ddf-2c00-48c2-9d1a-760919aeee4b)



## 👊 Katkıda Bulunma

- Katkılar her zaman açıktır! Eğer hata bulursanız veya yeni bir özellik eklemek isterseniz, lütfen bir pull request gönderin.
- Bu depoyu fork'layın.
- Yeni bir branch oluşturun: git checkout -b feature/yeniden-özellik.
- Değişikliklerinizi yapın ve commit edin: git commit -am 'Yeni özellik ekle'.
- Branch'ınızı GitHub'a gönderin: git push origin feature/yeniden-özellik.
- Pull request oluşturun.

## 📦 Kurulum

Projenin çalışması için aşağıdaki adımları izle:

### 1. Depoyu Klonlayın

Projeyi bilgisayarınıza klonlamak için aşağıdaki komutu kullanabilirsiniz:

```bash
git clone https://github.com/username/movie-app.git
cd movie-app
```

### 2. Bağımlılıkları Yükleyin
Projenin bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:

```bash
npm install
```

### 3. Uygulamayı Çalıştırın
Projeyi yerel sunucuda çalıştırmak için aşağıdaki komutu kullanın:

```bash
npm run dev
```
### 5. Uygulamayı Görüntüle
Bu komut, uygulamayı http://localhost:3000 adresinde başlatacaktır.
