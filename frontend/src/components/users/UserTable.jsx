import { useNavigate } from "react-router-dom";
import { Eye, Pencil, Trash2, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Avatar from "../ui/Avatar";
import StatusBadge from "../ui/StatusBadge";

export default function UserTable({ users, onDelete }) {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-surface-100">
            {["#", "Name", "Email", "Gender", "Status", "Location", ""].map(
              (h) => (
                <th
                  key={h}
                  className="text-left text-xs font-medium text-surface-500 uppercase tracking-wider
                           py-3 px-3 first:pl-1"
                >
                  {h}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-100">
          {users.map((user, idx) => (
            <tr
              key={user._id}
              className="group hover:bg-surface-50/60 transition-colors duration-100"
            >
              <td className="py-3 px-3 pl-1">
                <span className="font-mono text-xs text-surface-400">
                  {idx + 1}
                </span>
              </td>
              <td className="py-3 px-3">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={user.profileImage}
                    name={`${user.firstName} ${user.lastName}`}
                    size="sm"
                  />
                  <div>
                    <p className="text-sm font-medium text-surface-900">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-surface-400 font-mono">
                      {user.mobile}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-3 px-3 text-sm text-surface-600">
                {user.email}
              </td>
              <td className="py-3 px-3 text-sm text-surface-600">
                {user.gender}
              </td>
              <td className="py-3 px-3">
                <StatusBadge status={user.status} />
              </td>
              <td className="py-3 px-3 text-sm text-surface-500 max-w-[120px] truncate">
                {user.location}
              </td>
              <td className="py-3 px-3 text-right">
                {/* Desktop actions */}
                <div className="hidden sm:flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => navigate(`/users/${user._id}`)}
                    className="p-1.5 rounded-lg text-surface-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                    title="View"
                  >
                    <Eye size={15} />
                  </button>
                  <button
                    onClick={() => navigate(`/users/${user._id}/edit`)}
                    className="p-1.5 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 transition-colors"
                    title="Edit"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className="p-1.5 rounded-lg text-surface-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                {/* Mobile dropdown */}
                <div className="sm:hidden relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === user._id ? null : user._id)
                    }
                    className="p-1.5 rounded-lg text-surface-400 hover:bg-surface-100 transition-colors"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {openMenu === user._id && (
                    <div
                      className="absolute right-0 top-8 bg-white border border-surface-200 rounded-xl
                                    shadow-lg z-10 w-36 py-1 animate-slide-in-right"
                    >
                      <button
                        onClick={() => {
                          navigate(`/users/${user._id}`);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-surface-700 hover:bg-surface-50"
                      >
                        <Eye size={14} /> View
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/users/${user._id}/edit`);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-surface-700 hover:bg-surface-50"
                      >
                        <Pencil size={14} /> Edit
                      </button>
                      <button
                        onClick={() => {
                          onDelete(user);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-brand-600 hover:bg-brand-50"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
