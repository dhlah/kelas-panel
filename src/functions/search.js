import guruData from "@/data/guru";
import jadwalData from "@/data/jadwal";

export function searchGuru(query) {
    try {
        // Fungsi untuk melakukan pencarian pada kedua bidang
        function search(data, value) {
            return data.filter(item => 
                (item['nama'] && item['nama'].toLowerCase().includes(value.toLowerCase())) || 
                (item['mapel'] && item['mapel'].toLowerCase().includes(value.toLowerCase()))
            );
        }

        // Jika query kosong atau tidak diberikan, kembalikan semua data
        if (!query) {
            return guruData;
        }

        // Jika query diberikan, lakukan pencarian
        return search(guruData, query);
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export function searchJadwal(query) {
    try {
        // Fungsi untuk melakukan pencarian pada kedua bidang
        function search(data, value) {
            return data.filter(item => 
                (item['hari'] && item['hari'].toLowerCase().includes(value.toLowerCase()))
            );
        }

        // Jika query kosong atau tidak diberikan, kembalikan semua data
        if (!query) {
            return jadwalData;
        }

        // Jika query diberikan, lakukan pencarian
        return search(jadwalData, query);
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}