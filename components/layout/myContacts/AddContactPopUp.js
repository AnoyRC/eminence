'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Button,
  Input,
  Select,
  Option,
} from '@material-tailwind/react';
import localFont from 'next/font/local';
import ContactTabSearch from './ContactTabSearch';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '@/redux/contactsSlice';
import useGetServer from '@/hooks/useGetServer';

const myFont = localFont({
  src: '../../../public/fonts/Satoshi-Variable.woff2',
});

export default function AddContactPopUp() {
  const dispatch = useDispatch();
  const [queryType, setQueryType] = useState('name');
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState(null);
  const isPopup = useSelector((state) => state.contacts.isPopup);
  const { getUserByPubkey, getUserByName } = useGetServer();

  const handleSearchClick = (e) => {
    e.preventDefault();

    const fetchUser = async () => {
      if (queryType === 'address') {
        const data = await getUserByPubkey(query);
        if (data) {
          setUsers([data]);
          setQuery('');
          return;
        }

        setUsers(null);
      } else {
        const data = await getUserByName(query);
        if (data) {
          setUsers(data);
          setQuery('');
          return;
        }

        setUsers(null);
      }
    };

    fetchUser();
  };

  return (
    isPopup && (
      <div className="absolute top-0 left-0 h-full w-full backdrop-filter backdrop-blur-lg z-50">
        <div className=" flex justify-center h-full items-center ">
          <div className="w-[668px] h-full px-[16px] py-[20px] flex items-center justify-center">
            <div
              className="w-full rounded-[8px] p-[0.5px]"
              style={{
                background:
                  'linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)',
              }}
            >
              <div className={'h-full w-full rounded-[8px] bg-black '}>
                <Card
                  className={'h-full w-full rounded-[8px] bg-black pb-[5px]'}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none bg-black"
                  >
                    <div className=" flex flex-col justify-between gap-8 pb-1 relative">
                      <div>
                        <Typography
                          variant="h2"
                          color="white"
                          className={myFont.className}
                        >
                          Add Contact
                        </Typography>
                        <Typography
                          color="white"
                          variant="paragraph"
                          className={'mt-1 font-normal ' + myFont.className}
                        >
                          Add a new contact to your list
                        </Typography>
                      </div>
                      <XMarkIcon
                        className="h-6 w-6 text-white hover:cursor-pointer absolute top-0 right-0"
                        onClick={() => {
                          dispatch(togglePopup(false));
                          setUsers(null);
                        }}
                      />
                    </div>
                  </CardHeader>

                  <CardBody className="p-4 flex flex-col w-full gap-4">
                    <form className="flex flex-col gap-4">
                      <div className="flex gap-[8px]">
                        <div className="w-[65%]">
                          <Input
                            variant="outlined"
                            label="Search"
                            color="white"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            icon={
                              <MagnifyingGlassIcon
                                className={'text-white ' + myFont.className}
                              />
                            }
                          />
                        </div>

                        <div className="w-[30%]">
                          <Select
                            label="Select Type"
                            className={
                              'border-b-white border-x-white text-white ' +
                              myFont.className
                            }
                            labelProps={{
                              className:
                                'before:border-white after:border-white text-white',
                            }}
                            value={queryType}
                            onChange={(e) => setQueryType(e)}
                          >
                            <Option value="name">User Name</Option>
                            <Option value="address">Address</Option>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className={
                          ' bg-gradient-to-r from-[#26FFFF] to-[#4AFF93]  w-full flex flex-row  text-black items-center justify-center text-[14px] font-bold rounded-[8px]'
                        }
                        style={{
                          textTransform: 'none',
                        }}
                        onClick={handleSearchClick}
                      >
                        Search User
                        <span>
                          <MagnifyingGlassIcon className="h-4 w-4 ml-2 text-black" />
                        </span>
                      </Button>
                    </form>

                    <Typography
                      variant="h2"
                      color="white"
                      className={myFont.className}
                    >
                      Results
                    </Typography>

                    {users ? (
                      users.length > 0 ? (
                        users.map((user) => (
                          <ContactTabSearch
                            key={user.pubkey}
                            name={user.firstName + ' ' + user.lastName}
                            pubkey={user.pubkey}
                            avatarId={user.avatarId}
                          />
                        ))
                      ) : (
                        <p>No user found</p>
                      )
                    ) : (
                      <p>No user found</p>
                    )}
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
