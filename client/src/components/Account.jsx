import CardForm from "../utils/CardForm";

export default function Account() {
  return (
    <>
      <div className="grid m-2">
        <CardForm name="name" LabelName="Nama" />
        <CardForm name="email" LabelName="Email" />
        <CardForm name="password" LabelName="Password" />
      </div>
      <button className="btn bg-slate-600 text-slate-50 w-full max-w-[475px] mt-2 rounded-full fixed bottom-0" onClick={() => alert("Data Berhasil Disimpan")}>
        Simpan
      </button>
    </>
  );
}
