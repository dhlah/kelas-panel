const jadwalData = [
    {
        "hari": "senin",
        "data": [
            {"jam": "2", "mapel": "PKK", "ruangan": "RC-2.5", "guru": "Idrus Endang"},
            {"jam": "1", "mapel": "PKK", "ruangan": "RC-2.5", "guru": "Idrus Endang"},
            {"jam": "3", "mapel": "PKN", "ruangan": "RC-2.5", "guru": "Mega Silvia"},
            {"jam": "4", "mapel": "PKN", "ruangan": "RC-2.5", "guru": "Mega Silvia"},
            {"jam": "5", "mapel": "MTK", "ruangan": "RC-2.5", "guru": "Anzalia Dwi"},
            {"jam": "6", "mapel": "MTK", "ruangan": "RC-2.5", "guru": "Anzalia Dwi"},
            {"jam": "7", "mapel": "B. Inggris", "ruangan": "RC-2.5", "guru": "Emmy Meuthia"},
            {"jam": "8", "mapel": "B. Inggris", "ruangan": "RC-2.5", "guru": "Emmy Meuthia"},
            {"jam": "9", "mapel": "PAI", "ruangan": "RC-2.5", "guru": "Eli Solihat"},
            {"jam": "10", "mapel": "PAI", "ruangan": "RC-2.5", "guru": "Eli Sholihat"}
        ]
    },
    {
        "hari": "selasa",
        "data": [
            {"jam": "1", "mapel": "Produktif", "ruangan": "RC-1.3", "guru": "Harisah Rahmah"},
            {"jam": "2", "mapel": "Produktif", "ruangan": "RC-1.3", "guru": "Harisah Rahmah"},
            {"jam": "3", "mapel": "Produktif", "ruangan": "RC-1.3", "guru": "Harisah Rahmah"},
            {"jam": "4", "mapel": "Produktif", "ruangan": "RC-1.3", "guru": "Harisah Rahmah"},
            {"jam": "5", "mapel": "Produktif", "ruangan": "RC-1.3", "guru": "Harisah Rahmah"},
            {"jam": "6", "mapel": "Produktif", "ruangan": "RC-1.3", "guru": "Harisah Rahmah"},
            {"jam": "7", "mapel": "B. Jepang", "ruangan": "RC-2.3", "guru": "M Khudori"},
            {"jam": "8", "mapel": "B. Jepang", "ruangan": "RC-2.3", "guru": "M Khudori"},
            {"jam": "9", "mapel": "SILAT", "ruangan": "Lapangan", "guru": "Tedi Maryanto"},
            {"jam": "10", "mapel": "SILAT", "ruangan": "Lapangan", "guru": "Tedi Maryanto"}
        ]
    },
    {
        "hari": "rabu",
        "data": [
            {"jam": "1", "mapel": "PJOK", "ruangan": "Lapangan", "guru": "Dede Mulyana"},
            {"jam": "2", "mapel": "PJOK", "ruangan": "Lapangan", "guru": "Dede Mulyana"},
            {"jam": "3", "mapel": "B. Indonesia", "ruangan": "Bengkel TBO", "guru": "Nina Rici Dewi"},
            {"jam": "4", "mapel": "B. Indonesia", "ruangan": "Bengkel TBO", "guru": "Nina Rici Dewi"},
            {"jam": "5", "mapel": "PLH", "ruangan": "RA-3.3", "guru": "Dwi Suci Novitasari"},
            {"jam": "6", "mapel": "PLH", "ruangan": "RA-3.3", "guru": "Dwi Suci Novitasari"},
            {"jam": "7", "mapel": "Produktif", "ruangan": "RC-1.2", "guru": "Luthfi Akbar Pratama"},
            {"jam": "8", "mapel": "Produktif", "ruangan": "RC-1.2", "guru": "Luthfi Akbar Pratama"},
            {"jam": "9", "mapel": "Produktif", "ruangan": "RC-1.2", "guru": "Luthfi Akbar Pratama"},
            {"jam": "10", "mapel": "Produktif", "ruangan": "RC-1.2", "guru": "Luthfi Akbar Pratama"}
        ]
    },
    {
        "hari": "kamis",
        "data": [
            {"jam": "1", "mapel": "Sejarah", "ruangan": "RD-2.2", "guru": "Yulianti"},
            {"jam": "2", "mapel": "Sejarah", "ruangan": "RD-2.2", "guru": "Yulianti"},
            {"jam": "3", "mapel": "B. Indonesia", "ruangan": "RD-2.2", "guru": "Nina Rici Dewi"},
            {"jam": "4", "mapel": "B. Indonesia", "ruangan": "RD-2.2", "guru": "Nina Rici Dewi"},
            {"jam": "5", "mapel": "MTK", "ruangan": "RD-2.2", "guru": "Anzalia Dwi"},
            {"jam": "6", "mapel": "MTK", "ruangan": "RD-2.2", "guru": "Anzalia Dwi"},
            {"jam": "7", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Nurhayat Arif"},
            {"jam": "8", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Nurhayat Arif"},
            {"jam": "9", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Nurhayat Arif"},
            {"jam": "10", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Nurhayat Arif"}
        ]
    },
    {
        "hari": "jumat",
        "data": [
            {"jam": "1", "mapel": "PAI", "ruangan": "Masjid", "guru": "Eli Solihat"},
            {"jam": "2", "mapel": "PAI", "ruangan": "Masjid", "guru": "Eli Solihat"},
            {"jam": "3", "mapel": "B. Inggris", "ruangan": "Masjid", "guru": "Emmy Meuthia"},
            {"jam": "4", "mapel": "B. Inggris", "ruangan": "Masjid", "guru": "Emmy Meuthia"},
            {"jam": "5", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Luthfi Akbar Pratama"},
            {"jam": "6", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Luthfi Akbar Pratama"},
            {"jam": "7", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Luthfi Akbar Pratama"},
            {"jam": "8", "mapel": "Produktif", "ruangan": "RC-1.4", "guru": "Luthfi Akbar Pratama"}
        ]
    }
]

export default jadwalData