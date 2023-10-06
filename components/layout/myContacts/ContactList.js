import ProfileAvatar from '@/components/ui/ProfileAvatar';

const ContactList = ({ name, status }) => {
  return (
    <div className="bg-primary-black px-3 py-2 w-full rounded-lg flex justify-start items-center">
      <div className="relative mr-3">
        <ProfileAvatar
          style={{ width: '2rem', height: '2rem' }}
          id={name}
          classname={''}
        />

        <div
          className={`absolute top-0.5 border-primary-white border rounded-full right-0 w-1.5 h-1.5 ${
            status === 'online' ? 'bg-gradient-primary' : 'bg-[#DF0000]'
          }`}
        ></div>
      </div>

      <p className="text-sm text-primary-white font-medium">{name}</p>
    </div>
  );
};

export default ContactList;
