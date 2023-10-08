import ProfileAvatar from '@/components/ui/ProfileAvatar';

const ContactList = ({ name, status }) => {
  return (
    <div className="bg-primary-black px-3 py-2 w-full rounded-lg flex justify-between items-center">
      <div className="relative flex items-center">
        <ProfileAvatar
          style={{ width: '2rem', height: '2rem' }}
          id={name}
          classname={'mr-3'}
        />

        <p className="text-sm text-primary-white font-medium">{name}</p>
      </div>

      <div
        className={` w-[10px] h-[10px] rounded-full ${
          status === 'online' ? 'bg-gradient-primary' : 'bg-[#DF0000]'
        }`}
      ></div>
    </div>
  );
};

export default ContactList;
