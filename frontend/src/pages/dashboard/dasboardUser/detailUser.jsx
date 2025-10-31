import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserById } from "@/utils/api/users";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUserById = async (id) => {
    try {
      const response = await getUserById(id);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserById(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <LayoutDashboard>
      <div className="flex gap-3">
        <ArrowLeft className="" onClick={() => navigate(-1)} />
        <div className="mb-5 font-bold text-[16px]">Detail User</div>
      </div>
      <div className="space-y-8">
        <div>
          <Label className="mb-2">Nama Lengkap</Label>
          <Input disabled value={user.fullname} />
        </div>
        <div>
          <Label className="mb-2">Username</Label>
          <Input disabled value={user.username} />
        </div>
        <div>
          <Label className="mb-2">Email</Label>
          <Input disabled value={user.email} />
        </div>
        <div>
          <Label className="mb-2">Nomor Telepon</Label>
          <Input disabled value={user.phone_number} />
        </div>
        <div>
          <Label className="mb-2">Umur</Label>
          <Input disabled value={user.age} />
        </div>
        <div>
          <Label className="mb-2">Alamat</Label>
          <Input disabled value={user.address} />
        </div>
        <div>
          <Label className="mb-2">Role</Label>
          <Input disabled value={user.role} />
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default DetailUser;
