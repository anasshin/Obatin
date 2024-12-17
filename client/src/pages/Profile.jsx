import User from "../assets/person.jpg";
import ButtonProfile from "../utils/ButtonProfile";
import RiwayatTransaksi from "../assets/icons/bill_2_line.svg";
export default function Profile() {
  return (
    <>
      <div className="flex flex-col max-h-screen pt-18">
        <div className="flex flex-col items-center justify-center">
          <img src={User} className="w-32 h-32 object-fill rounded-full" />
          <h1 className="text-md font-bold my-2">John Doe</h1>
          <p className="text-xs font-bold text-slate-500 mb-4">
            anas@email.com
          </p>
        </div>
        <div className="mx-4">
          <ButtonProfile
            to="/account"
            image={RiwayatTransaksi}
            name="Akun Saya"
          />
          <ButtonProfile
            to="/orders"
            image="https://img.icons8.com/ios/452/transaction-list.png"
            name="Riwayat Transaksi"
          />
          <ButtonProfile
            to="/address"
            image="https://img.icons8.com/ios/452/transaction-list.png"
            name="Alamat Saya"
          />
          <ButtonProfile
            to="/about"
            image="https://img.icons8.com/ios/452/transaction-list.png"
            name="Tentang Kami"
          />
        </div>
        <button className="btn bg-slate-600 text-slate-50 w-full max-w-[475px] mt-2 rounded-full fixed bottom-0">
          Logout
        </button>
      </div>
    </>
  );
}
