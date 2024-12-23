function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  gpa = parseFloat(gpa);
  let programName = "";
  if (programId == "ACC") {
    programName = "Akuntansi";
  } else if (programId == "HIN") {
    programName = "Hubungan Internasional";
  } else if (programId == "IAB") {
    programName = "Ilmu Administrasi Bisnis";
  } else if (programId == "IAP") {
    programName = "Ilmu Administrasi Publik";
  } else if (programId == "MJN") {
    programName = "Manajemen";
  } else if (programId == "TKM") {
    programName = "Teknik Kimia";
  } else {
    return "Inputan salah";
  }

  if (gpa < 0 || gpa > 4) {
    return "Invalid gpa number";
  } else {
  }

  let message = "";
  if (gpa >= 2.99) {
    sks = 24;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (gpa >= 2.5 && gpa <= 2.99) {
    sks = 21;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (gpa >= 2 && gpa <= 2.49) {
    sks = 18;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (gpa >= 1.5 && gpa <= 1.99) {
    sks = 15;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (gpa >= 0 && gpa <= 1.49) {
    sks = 12;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  }

  return message;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
