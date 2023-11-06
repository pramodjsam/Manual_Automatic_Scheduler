import { React, useState, useEffect, Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, MenuItem, Select, } from '@mui/material';
import axios from 'axios';
import './home.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const loadDataValueModel = {
    X1MondayValue: 0,
    X1TuesdayValue: 0,
    X1WednesdayValue: 0,
    X1ThursdayValue: 0,
    X1FridayValue: 0,
    X1TotalValue: 0,
    X2MondayValue: 0,
    X2TuesdayValue: 0,
    X2WednesdayValue: 0,
    X2ThursdayValue: 0,
    X2FridayValue: 0,
    X2TotalValue: 0,
    X3MondayValue: 0,
    X3TuesdayValue: 0,
    X3WednesdayValue: 0,
    X3ThursdayValue: 0,
    X3FridayValue: 0,
    X3TotalValue: 0,
    X4MondayValue: 0,
    X4TuesdayValue: 0,
    X4WednesdayValue: 0,
    X4ThursdayValue: 0,
    X4FridayValue: 0,
    X4TotalValue: 0,
    X5MondayValue: 0,
    X5TuesdayValue: 0,
    X5WednesdayValue: 0,
    X5ThursdayValue: 0,
    X5FridayValue: 0,
    X5TotalValue: 0,
    X6MondayValue: 0,
    X6TuesdayValue: 0,
    X6WednesdayValue: 0,
    X6ThursdayValue: 0,
    X6FridayValue: 0,
    X6TotalValue: 0,
    X7MondayValue: 0,
    X7TuesdayValue: 0,
    X7WednesdayValue: 0,
    X7ThursdayValue: 0,
    X7FridayValue: 0,
    X7TotalValue: 0,
}

export default function BasicTable() {
    const [selectedMorningUpStairsMonday, setSelectedMorningUpStairsMonday] = useState('');
    const [selectedMorningUpStairsTuesday, setSelectedMorningUpStairsTuesday] = useState('');
    const [selectedMorningUpStairsWednesday, setSelectedMorningUpStairsWednesday] = useState('');
    const [selectedMorningUpStairsThursday, setSelectedMorningUpStairsThursday] = useState('');
    const [selectedMorningUpStairsFriday, setSelectedMorningUpStairsFriday] = useState('');
    const [selectedMorningDownStairsMonday, setSelectedMorningDownStairsMonday] = useState('');
    const [selectedMorningDownStairsTuesday, setSelectedMorningDownStairsTuesday] = useState('');
    const [selectedMorningDownStairsWednesday, setSelectedMorningDownStairsWednesday] = useState('');
    const [selectedMorningDownStairsThursday, setSelectedMorningDownStairsThursday] = useState('');
    const [selectedMorningDownStairsFriday, setSelectedMorningDownStairsFriday] = useState('');
    const [selectedMorningParkingLotMonday, setSelectedMorningParkingLotMonday] = useState('');
    const [selectedMorningParkingLotTuesday, setSelectedMorningParkingLotTuesday] = useState('');
    const [selectedMorningParkingLotWednesday, setSelectedMorningParkingLotWednesday] = useState('');
    const [selectedMorningParkingLotThursday, setSelectedMorningParkingLotThursday] = useState('');
    const [selectedMorningParkingLotFriday, setSelectedMorningParkingLotFriday] = useState('');
    const [selectedLunchAMonday, setSelectedLunchAMonday] = useState('');
    const [selectedLunchATuesday, setSelectedLunchATuesday] = useState('');
    const [selectedLunchAWednesday, setSelectedLunchAWednesday] = useState('');
    const [selectedLunchAThursday, setSelectedLunchAThursday] = useState('');
    const [selectedLunchAFriday, setSelectedLunchAFriday] = useState('');
    const [selectedLunchBMonday, setSelectedLunchBMonday] = useState('');
    const [selectedLunchBTuesday, setSelectedLunchBTuesday] = useState('');
    const [selectedLunchBWednesday, setSelectedLunchBWednesday] = useState('');
    const [selectedLunchBThursday, setSelectedLunchBThursday] = useState('');
    const [selectedLunchBFriday, setSelectedLunchBFriday] = useState('');
    const [selectedLunchCMonday, setSelectedLunchCMonday] = useState('');
    const [selectedLunchCTuesday, setSelectedLunchCTuesday] = useState('');
    const [selectedLunchCWednesday, setSelectedLunchCWednesday] = useState('');
    const [selectedLunchCThursday, setSelectedLunchCThursday] = useState('');
    const [selectedLunchCFriday, setSelectedLunchCFriday] = useState('');
    const [selectedLunchDMonday, setSelectedLunchDMonday] = useState('');
    const [selectedLunchDTuesday, setSelectedLunchDTuesday] = useState('');
    const [selectedLunchDWednesday, setSelectedLunchDWednesday] = useState('');
    const [selectedLunchDThursday, setSelectedLunchDThursday] = useState('');
    const [selectedLunchDFriday, setSelectedLunchDFriday] = useState('');
    const [selectedAfternoonUpStairsMonday, setSelectedAfternoonUpStairsMonday] = useState('');
    const [selectedAfternoonUpStairsTuesday, setSelectedAfternoonUpStairsTuesday] = useState('');
    const [selectedAfternoonUpStairsWednesday, setSelectedAfternoonUpStairsWednesday] = useState('');
    const [selectedAfternoonUpStairsThursday, setSelectedAfternoonUpStairsThursday] = useState('');
    const [selectedAfternoonUpStairsFriday, setSelectedAfternoonUpStairsFriday] = useState('');
    const [selectedAfternoonDownStairsMonday, setSelectedAfternoonDownStairsMonday] = useState('');
    const [selectedAfternoonDownStairsTuesday, setSelectedAfternoonDownStairsTuesday] = useState('');
    const [selectedAfternoonDownStairsWednesday, setSelectedAfternoonDownStairsWednesday] = useState('');
    const [selectedAfternoonDownStairsThursday, setSelectedAfternoonDownStairsThursday] = useState('');
    const [selectedAfternoonDownStairsFriday, setSelectedAfternoonDownStairsFriday] = useState('');
    const [selectedAfternoonParkingLotMonday, setSelectedAfternoonParkingLotMonday] = useState('');
    const [selectedAfternoonParkingLotTuesday, setSelectedAfternoonParkingLotTuesday] = useState('');
    const [selectedAfternoonParkingLotWednesday, setSelectedAfternoonParkingLotWednesday] = useState('');
    const [selectedAfternoonParkingLotThursday, setSelectedAfternoonParkingLotThursday] = useState('');
    const [selectedAfternoonParkingLotFriday, setSelectedAfternoonParkingLotFriday] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [loadDataValue, setLoadDataValue] = useState(loadDataValueModel);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setDialogMessage("");
        setOpen(false);
    };

    const staffMembers = [
        'X1',
        'X2',
        'X3',
        'X4',
        'X5',
        'X6',
        'X7',
    ];
    const scheduleModel =
        [
            'MorningUpStairsMonday',
            'MorningUpStairsTuesday',
            'MorningUpStairsWednesday',
            'MorningUpStairsThursday',
            'MorningUpStairsFriday',
            'MorningDownStairsMonday',
            'MorningDownStairsTuesday',
            'MorningDownStairsWednesday',
            'MorningDownStairsThursday',
            'MorningDownStairsFriday',
            'MorningParkingLotMonday',
            'MorningParkingLotTuesday',
            'MorningParkingLotWednesday',
            'MorningParkingLotThursday',
            'MorningParkingLotFriday',
            'LunchAMonday',
            'LunchATuesday',
            'LunchAWednesday',
            'LunchAThursday',
            'LunchAFriday',
            'LunchBMonday',
            'LunchBTuesday',
            'LunchBWednesday',
            'LunchBThursday',
            'LunchBFriday',
            'LunchCMonday',
            'LunchCTuesday',
            'LunchCWednesday',
            'LunchCThursday',
            'LunchCFriday',
            'LunchDMonday',
            'LunchDTuesday',
            'LunchDWednesday',
            'LunchDThursday',
            'LunchDFriday',
            'AfternoonUpStairsMonday',
            'AfternoonUpStairsTuesday',
            'AfternoonUpStairsWednesday',
            'AfternoonUpStairsThursday',
            'AfternoonUpStairsFriday',
            'AfternoonDownStairsMonday',
            'AfternoonDownStairsTuesday',
            'AfternoonDownStairsWednesday',
            'AfternoonDownStairsThursday',
            'AfternoonDownStairsFriday',
            'AfternoonParkingLotMonday',
            'AfternoonParkingLotTuesday',
            'AfternoonParkingLotWednesday',
            'AfternoonParkingLotThursday',
            'AfternoonParkingLotFriday',
        ];

    const submitHanlder = async (e) => {
            e.preventDefault();
        const reqData = {
            MorningUpStairsMonday: selectedMorningUpStairsMonday,
            MorningUpStairsTuesday: selectedMorningUpStairsTuesday,
            MorningUpStairsWednesday: selectedMorningUpStairsWednesday,
            MorningUpStairsThursday: selectedMorningUpStairsThursday,
            MorningUpStairsFriday: selectedMorningUpStairsFriday,
            MorningDownStairsMonday: selectedMorningDownStairsMonday,
            MorningDownStairsTuesday: selectedMorningDownStairsTuesday,
            MorningDownStairsWednesday: selectedMorningDownStairsWednesday,
            MorningDownStairsThursday: selectedMorningDownStairsThursday,
            MorningDownStairsFriday: selectedMorningDownStairsFriday,
            MorningParkingLotMonday: selectedMorningParkingLotMonday,
            MorningParkingLotTuesday: selectedMorningParkingLotTuesday,
            MorningParkingLotWednesday: selectedMorningParkingLotWednesday,
            MorningParkingLotThursday: selectedMorningParkingLotThursday,
            MorningParkingLotFriday: selectedMorningParkingLotFriday,
            LunchAMonday: selectedLunchAMonday,
            LunchATuesday: selectedLunchATuesday,
            LunchAWednesday: selectedLunchAWednesday,
            LunchAThursday: selectedLunchAThursday,
            LunchAFriday: selectedLunchAFriday,
            LunchBMonday: selectedLunchBMonday,
            LunchBTuesday: selectedLunchBTuesday,
            LunchBWednesday: selectedLunchBWednesday,
            LunchBThursday: selectedLunchBThursday,
            LunchBFriday: selectedLunchBFriday,
            LunchCMonday: selectedLunchCMonday,
            LunchCTuesday: selectedLunchCTuesday,
            LunchCWednesday: selectedLunchCWednesday,
            LunchCThursday: selectedLunchCThursday,
            LunchCFriday: selectedLunchCFriday,
            LunchDMonday: selectedLunchDMonday,
            LunchDTuesday: selectedLunchDTuesday,
            LunchDWednesday: selectedLunchDWednesday,
            LunchDThursday: selectedLunchDThursday,
            LunchDFriday: selectedLunchDFriday,
            AfternoonUpStairsMonday: selectedAfternoonUpStairsMonday,
            AfternoonUpStairsTuesday: selectedAfternoonUpStairsTuesday,
            AfternoonUpStairsWednesday: selectedAfternoonUpStairsWednesday,
            AfternoonUpStairsThursday: selectedAfternoonUpStairsThursday,
            AfternoonUpStairsFriday: selectedAfternoonUpStairsFriday,
            AfternoonDownStairsMonday: selectedAfternoonDownStairsMonday,
            AfternoonDownStairsTuesday: selectedAfternoonDownStairsTuesday,
            AfternoonDownStairsWednesday: selectedAfternoonDownStairsWednesday,
            AfternoonDownStairsThursday: selectedAfternoonDownStairsThursday,
            AfternoonDownStairsFriday: selectedAfternoonDownStairsFriday,
            AfternoonParkingLotMonday: selectedAfternoonParkingLotMonday,
            AfternoonParkingLotTuesday: selectedAfternoonParkingLotTuesday,
            AfternoonParkingLotWednesday: selectedAfternoonParkingLotWednesday,
            AfternoonParkingLotThursday: selectedAfternoonParkingLotThursday,
            AfternoonParkingLotFriday: selectedAfternoonParkingLotFriday,
        }

        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqData)
        }
        await fetch('/api/v1/schedule', reqOptions)
            .then(res => res.json())
            .then(res => {
                setDialogMessage("Successfully Data Saved!..");
                handleClickOpen();
                getScheduleData();
            }
            )
            .catch(err => {
                setDialogMessage("Something went wrong!..");
                handleClickOpen();
            })


    }

    const updateAllValue = async () => {
        
      const MondayValue = [ selectedMorningUpStairsMonday, selectedMorningDownStairsMonday, selectedMorningParkingLotMonday, selectedLunchAMonday, selectedLunchBMonday, selectedLunchCMonday, selectedLunchDMonday, selectedAfternoonUpStairsMonday, selectedAfternoonDownStairsMonday, selectedAfternoonParkingLotMonday, ]
      const TuesdayValue = [ selectedMorningUpStairsTuesday, selectedMorningDownStairsTuesday, selectedMorningParkingLotTuesday, selectedLunchATuesday, selectedLunchBTuesday, selectedLunchCTuesday, selectedLunchDTuesday, selectedAfternoonUpStairsTuesday, selectedAfternoonDownStairsTuesday, selectedAfternoonParkingLotTuesday, ]
      const WednesdayValue = [ selectedMorningUpStairsWednesday, selectedMorningDownStairsWednesday, selectedMorningParkingLotWednesday, selectedLunchAWednesday, selectedLunchBWednesday, selectedLunchCWednesday, selectedLunchDWednesday, selectedAfternoonUpStairsWednesday, selectedAfternoonDownStairsWednesday, selectedAfternoonParkingLotWednesday, ]
      const ThursdayValue = [ selectedMorningUpStairsThursday, selectedMorningDownStairsThursday, selectedMorningParkingLotThursday, selectedLunchAThursday, selectedLunchBThursday, selectedLunchCThursday, selectedLunchDThursday, selectedAfternoonUpStairsThursday, selectedAfternoonDownStairsThursday, selectedAfternoonParkingLotThursday, ]
      const FridayValue = [ selectedMorningUpStairsFriday, selectedMorningDownStairsFriday, selectedMorningParkingLotFriday, selectedLunchAFriday, selectedLunchBFriday, selectedLunchCFriday, selectedLunchDFriday, selectedAfternoonUpStairsFriday, selectedAfternoonDownStairsFriday, selectedAfternoonParkingLotFriday, ];
      const X1MondayValue = MondayValue?.filter(item => item == 'X1')?.length > 0 ?  MondayValue?.filter(item => item == 'X1').length : 0 ;
      const X1TuesdayValue = TuesdayValue?.filter(item => item == 'X1')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X1').length : 0 ;
      const X1WednesdayValue = WednesdayValue?.filter(item => item == 'X1')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X1').length : 0 ;
      const X1ThursdayValue = ThursdayValue?.filter(item => item == 'X1')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X1').length : 0 ;
      const X1FridayValue = FridayValue?.filter(item => item == 'X1')?.length > 0 ?  FridayValue?.filter(item => item == 'X1').length : 0 ;
      const X2MondayValue = MondayValue?.filter(item => item == 'X2')?.length > 0 ?  MondayValue?.filter(item => item == 'X2').length : 0 ;
      const X2TuesdayValue = TuesdayValue?.filter(item => item == 'X2')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X2').length : 0 ;
      const X2WednesdayValue = WednesdayValue?.filter(item => item == 'X2')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X2').length : 0 ;
      const X2ThursdayValue = ThursdayValue?.filter(item => item == 'X2')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X2').length : 0 ;
      const X2FridayValue = FridayValue?.filter(item => item == 'X2')?.length > 0 ?  FridayValue?.filter(item => item == 'X2').length : 0 ;
      const X3MondayValue = MondayValue?.filter(item => item == 'X3')?.length > 0 ?  MondayValue?.filter(item => item == 'X3').length : 0 ;
      const X3TuesdayValue = TuesdayValue?.filter(item => item == 'X3')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X3').length : 0 ;
      const X3WednesdayValue = WednesdayValue?.filter(item => item == 'X3')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X3').length : 0 ;
      const X3ThursdayValue = ThursdayValue?.filter(item => item == 'X3')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X3').length : 0 ;
      const X3FridayValue = FridayValue?.filter(item => item == 'X3')?.length > 0 ?  FridayValue?.filter(item => item == 'X3').length : 0 ;
      const X4MondayValue = MondayValue?.filter(item => item == 'X4')?.length > 0 ?  MondayValue?.filter(item => item == 'X4').length : 0 ;
      const X4TuesdayValue = TuesdayValue?.filter(item => item == 'X4')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X4').length : 0 ;
      const X4WednesdayValue = WednesdayValue?.filter(item => item == 'X4')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X4').length : 0 ;
      const X4ThursdayValue = ThursdayValue?.filter(item => item == 'X4')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X4').length : 0 ;
      const X4FridayValue = FridayValue?.filter(item => item == 'X4')?.length > 0 ?  FridayValue?.filter(item => item == 'X4').length : 0 ;
      const X5MondayValue = MondayValue?.filter(item => item == 'X5')?.length > 0 ?  MondayValue?.filter(item => item == 'X5').length : 0 ;
      const X5TuesdayValue = TuesdayValue?.filter(item => item == 'X5')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X5').length : 0 ;
      const X5WednesdayValue = WednesdayValue?.filter(item => item == 'X5')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X5').length : 0 ;
      const X5ThursdayValue = ThursdayValue?.filter(item => item == 'X5')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X5').length : 0 ;
      const X5FridayValue = FridayValue?.filter(item => item == 'X5')?.length > 0 ?  FridayValue?.filter(item => item == 'X5').length : 0 ;
      const X6MondayValue = MondayValue?.filter(item => item == 'X6')?.length > 0 ?  MondayValue?.filter(item => item == 'X6').length : 0 ;
      const X6TuesdayValue = TuesdayValue?.filter(item => item == 'X6')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X6').length : 0 ;
      const X6WednesdayValue = WednesdayValue?.filter(item => item == 'X6')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X6').length : 0 ;
      const X6ThursdayValue = ThursdayValue?.filter(item => item == 'X6')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X6').length : 0 ;
      const X6FridayValue = FridayValue?.filter(item => item == 'X6')?.length > 0 ?  FridayValue?.filter(item => item == 'X6').length : 0 ;
      const X7MondayValue = MondayValue?.filter(item => item == 'X7')?.length > 0 ?  MondayValue?.filter(item => item == 'X7').length : 0 ;
      const X7TuesdayValue = TuesdayValue?.filter(item => item == 'X7')?.length > 0 ?  TuesdayValue?.filter(item => item == 'X7').length : 0 ;
      const X7WednesdayValue = WednesdayValue?.filter(item => item == 'X7')?.length > 0 ?  WednesdayValue?.filter(item => item == 'X7').length : 0 ;
      const X7ThursdayValue = ThursdayValue?.filter(item => item == 'X7')?.length > 0 ?  ThursdayValue?.filter(item => item == 'X7').length : 0 ;
      const X7FridayValue = FridayValue?.filter(item => item == 'X7')?.length > 0 ?  FridayValue?.filter(item => item == 'X7').length : 0 ;
      const X1TotalValue = X1MondayValue +X1TuesdayValue +X1WednesdayValue +X1ThursdayValue +X1FridayValue;
      const X2TotalValue = X2MondayValue +X2TuesdayValue +X2WednesdayValue +X2ThursdayValue +X2FridayValue;
      const X3TotalValue = X3MondayValue +X3TuesdayValue +X3WednesdayValue +X3ThursdayValue +X3FridayValue;
      const X4TotalValue = X4MondayValue +X4TuesdayValue +X4WednesdayValue +X4ThursdayValue +X4FridayValue;
      const X5TotalValue = X5MondayValue +X5TuesdayValue +X5WednesdayValue +X5ThursdayValue +X5FridayValue;
      const X6TotalValue = X6MondayValue +X6TuesdayValue +X6WednesdayValue +X6ThursdayValue +X6FridayValue;
      const X7TotalValue = X7MondayValue +X7TuesdayValue +X7WednesdayValue +X7ThursdayValue +X7FridayValue;
      
      const newData = {
        X1MondayValue,
        X1TuesdayValue,
        X1WednesdayValue,
        X1ThursdayValue,
        X1FridayValue,
        X1TotalValue,
        X2MondayValue,
        X2TuesdayValue,
        X2WednesdayValue,
        X2ThursdayValue,
        X2FridayValue,
        X2TotalValue,
        X3MondayValue,
        X3TuesdayValue,
        X3WednesdayValue,
        X3ThursdayValue,
        X3FridayValue,
        X3TotalValue,
        X4MondayValue,
        X4TuesdayValue,
        X4WednesdayValue,
        X4ThursdayValue,
        X4FridayValue,
        X4TotalValue,
        X5MondayValue,
        X5TuesdayValue,
        X5WednesdayValue,
        X5ThursdayValue,
        X5FridayValue,
        X5TotalValue,
        X6MondayValue,
        X6TuesdayValue,
        X6WednesdayValue,
        X6ThursdayValue,
        X6FridayValue,
        X6TotalValue,
        X7MondayValue,
        X7TuesdayValue,
        X7WednesdayValue,
        X7ThursdayValue,
        X7FridayValue,
        X7TotalValue,
      }
       console.log(newData);
      await setLoadDataValue(newData);
    }

    const deleteHandler = async (e) => {
        ClearAllState();
        //// delete the  task
        const reqOptions = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        await axios.delete(`/api/v1/schedule/`, reqOptions)
            .then(res => {
                console.log(res.success)
                setDialogMessage("Successfully Data Deleted!..");
                handleClickOpen();
                getScheduleData();
            }
            )
            .catch(err => {
                setDialogMessage("Something went wrong!..");
                handleClickOpen();
            })

    }


    useEffect(async () => { 
            updateAllValue();
    }, [selectedMorningUpStairsMonday,
        selectedMorningUpStairsTuesday,
        selectedMorningUpStairsWednesday,
        selectedMorningUpStairsThursday,
        selectedMorningUpStairsFriday,
        selectedMorningDownStairsMonday,
        selectedMorningDownStairsTuesday,
        selectedMorningDownStairsWednesday,
        selectedMorningDownStairsThursday,
        selectedMorningDownStairsFriday,
        selectedMorningParkingLotMonday,
        selectedMorningParkingLotTuesday,
        selectedMorningParkingLotWednesday,
        selectedMorningParkingLotThursday,
        selectedMorningParkingLotFriday,
        selectedLunchAMonday,
        selectedLunchATuesday,
        selectedLunchAWednesday,
        selectedLunchAThursday,
        selectedLunchAFriday,
        selectedLunchBMonday,
        selectedLunchBTuesday,
        selectedLunchBWednesday,
        selectedLunchBThursday,
        selectedLunchBFriday,
        selectedLunchCMonday,
        selectedLunchCTuesday,
        selectedLunchCWednesday,
        selectedLunchCThursday,
        selectedLunchCFriday,
        selectedLunchDMonday,
        selectedLunchDTuesday,
        selectedLunchDWednesday,
        selectedLunchDThursday,
        selectedLunchDFriday,
        selectedAfternoonUpStairsMonday,
        selectedAfternoonUpStairsTuesday,
        selectedAfternoonUpStairsWednesday,
        selectedAfternoonUpStairsThursday,
        selectedAfternoonUpStairsFriday,
        selectedAfternoonDownStairsMonday,
        selectedAfternoonDownStairsTuesday,
        selectedAfternoonDownStairsWednesday,
        selectedAfternoonDownStairsThursday,
        selectedAfternoonDownStairsFriday,
        selectedAfternoonParkingLotMonday,
        selectedAfternoonParkingLotTuesday,
        selectedAfternoonParkingLotWednesday,
        selectedAfternoonParkingLotThursday,
        selectedAfternoonParkingLotFriday,
    ])

    useEffect(async () => {
        const reqOptions = {
            headers: {     // get schedule
                'Content-Type': 'application/json',
            }
        }
       await axios.get('/api/v1/schedule', reqOptions)
            .then((res) => {
                setLoadDataValue(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const getScheduleData = async () => {
        const reqOptions = {
            headers: {     // get schedule
                'Content-Type': 'application/json',
            }
        }
       await axios.get('/api/v1/schedule', reqOptions)
            .then((res) => {
                setLoadDataValue(res.data);
            })
            .catch(err => console.log(err))
    }

    const randomizeData = () => {
        if (selectedMorningUpStairsMonday == "" || selectedMorningUpStairsMonday == null == selectedMorningUpStairsMonday == undefined) setSelectedMorningUpStairsMonday('X2');
        if (selectedMorningUpStairsTuesday == "" || selectedMorningUpStairsTuesday == null == selectedMorningUpStairsTuesday == undefined) setSelectedMorningUpStairsTuesday('X1');
        if (selectedMorningUpStairsWednesday == "" || selectedMorningUpStairsWednesday == null == selectedMorningUpStairsWednesday == undefined) setSelectedMorningUpStairsWednesday('X4');
        if (selectedMorningUpStairsThursday == "" || selectedMorningUpStairsThursday == null == selectedMorningUpStairsThursday == undefined) setSelectedMorningUpStairsThursday('X3');
        if (selectedMorningUpStairsFriday == "" || selectedMorningUpStairsFriday == null == selectedMorningUpStairsFriday == undefined) setSelectedMorningUpStairsFriday('X5');
        if (selectedMorningDownStairsMonday == "" || selectedMorningDownStairsMonday == null == selectedMorningDownStairsMonday == undefined) setSelectedMorningDownStairsMonday('X6');
        if (selectedMorningDownStairsTuesday == "" || selectedMorningDownStairsTuesday == null == selectedMorningDownStairsTuesday == undefined) setSelectedMorningDownStairsTuesday('X7');
        if (selectedMorningDownStairsWednesday == "" || selectedMorningDownStairsWednesday == null == selectedMorningDownStairsWednesday == undefined) setSelectedMorningDownStairsWednesday('X1');
        if (selectedMorningDownStairsThursday == "" || selectedMorningDownStairsThursday == null == selectedMorningDownStairsThursday == undefined) setSelectedMorningDownStairsThursday('X2');
        if (selectedMorningDownStairsFriday == "" || selectedMorningDownStairsFriday == null == selectedMorningDownStairsFriday == undefined) setSelectedMorningDownStairsFriday('X3');
        if (selectedMorningParkingLotMonday == "" || selectedMorningParkingLotMonday == null == selectedMorningParkingLotMonday == undefined) setSelectedMorningParkingLotMonday('X4');
        if (selectedMorningParkingLotTuesday == "" || selectedMorningParkingLotTuesday == null == selectedMorningParkingLotTuesday == undefined) setSelectedMorningParkingLotTuesday('X5');
        if (selectedMorningParkingLotWednesday == "" || selectedMorningParkingLotWednesday == null == selectedMorningParkingLotWednesday == undefined) setSelectedMorningParkingLotWednesday('X6');
        if (selectedMorningParkingLotThursday == "" || selectedMorningParkingLotThursday == null == selectedMorningParkingLotThursday == undefined) setSelectedMorningParkingLotThursday('X7');
        if (selectedMorningParkingLotFriday == "" || selectedMorningParkingLotFriday == null == selectedMorningParkingLotFriday == undefined) setSelectedMorningParkingLotFriday('X1');
        if (selectedLunchAMonday == "" || selectedLunchAMonday == null == selectedLunchAMonday == undefined) setSelectedLunchAMonday('X2');
        if (selectedLunchATuesday == "" || selectedLunchATuesday == null == selectedLunchATuesday == undefined) setSelectedLunchATuesday('X3');
        if (selectedLunchAWednesday == "" || selectedLunchAWednesday == null == selectedLunchAWednesday == undefined) setSelectedLunchAWednesday('X4');
        if (selectedLunchAThursday == "" || selectedLunchAThursday == null == selectedLunchAThursday == undefined) setSelectedLunchAThursday('X5');
        if (selectedLunchAFriday == "" || selectedLunchAFriday == null == selectedLunchAFriday == undefined) setSelectedLunchAFriday('X6');
        if (selectedLunchBMonday == "" || selectedLunchBMonday == null == selectedLunchBMonday == undefined) setSelectedLunchBMonday('X7');
        if (selectedLunchBTuesday == "" || selectedLunchBTuesday == null == selectedLunchBTuesday == undefined) setSelectedLunchBTuesday('X1');
        if (selectedLunchBWednesday == "" || selectedLunchBWednesday == null == selectedLunchBWednesday == undefined) setSelectedLunchBWednesday('X2');
        if (selectedLunchBThursday == "" || selectedLunchBThursday == null == selectedLunchBThursday == undefined) setSelectedLunchBThursday('X3');
        if (selectedLunchBFriday == "" || selectedLunchBFriday == null == selectedLunchBFriday == undefined) setSelectedLunchBFriday('X4');
        if (selectedLunchCMonday == "" || selectedLunchCMonday == null == selectedLunchCMonday == undefined) setSelectedLunchCMonday('X5');
        if (selectedLunchCTuesday == "" || selectedLunchCTuesday == null == selectedLunchCTuesday == undefined) setSelectedLunchCTuesday('X6');
        if (selectedLunchCWednesday == "" || selectedLunchCWednesday == null == selectedLunchCWednesday == undefined) setSelectedLunchCWednesday('X7');
        if (selectedLunchCThursday == "" || selectedLunchCThursday == null == selectedLunchCThursday == undefined) setSelectedLunchCThursday('X1');
        if (selectedLunchCFriday == "" || selectedLunchCFriday == null == selectedLunchCFriday == undefined) setSelectedLunchCFriday('X2');
        if (selectedLunchDMonday == "" || selectedLunchDMonday == null == selectedLunchDMonday == undefined) setSelectedLunchDMonday('X3');
        if (selectedLunchDTuesday == "" || selectedLunchDTuesday == null == selectedLunchDTuesday == undefined) setSelectedLunchDTuesday('X4');
        if (selectedLunchDWednesday == "" || selectedLunchDWednesday == null == selectedLunchDWednesday == undefined) setSelectedLunchDWednesday('X5');
        if (selectedLunchDThursday == "" || selectedLunchDThursday == null == selectedLunchDThursday == undefined) setSelectedLunchDThursday('X6');
        if (selectedLunchDFriday == "" || selectedLunchDFriday == null == selectedLunchDFriday == undefined) setSelectedLunchDFriday('X7');
        if (selectedAfternoonUpStairsMonday == "" || selectedAfternoonUpStairsMonday == null == selectedAfternoonUpStairsMonday == undefined) setSelectedAfternoonUpStairsMonday('X1');
        if (selectedAfternoonUpStairsTuesday == "" || selectedAfternoonUpStairsTuesday == null == selectedAfternoonUpStairsTuesday == undefined) setSelectedAfternoonUpStairsTuesday('X2');
        if (selectedAfternoonUpStairsWednesday == "" || selectedAfternoonUpStairsWednesday == null == selectedAfternoonUpStairsWednesday == undefined) setSelectedAfternoonUpStairsWednesday('X3');
        if (selectedAfternoonUpStairsThursday == "" || selectedAfternoonUpStairsThursday == null == selectedAfternoonUpStairsThursday == undefined) setSelectedAfternoonUpStairsThursday('X4');
        if (selectedAfternoonUpStairsFriday == "" || selectedAfternoonUpStairsFriday == null == selectedAfternoonUpStairsFriday == undefined) setSelectedAfternoonUpStairsFriday('X5');
        if (selectedAfternoonDownStairsMonday == "" || selectedAfternoonDownStairsMonday == null == selectedAfternoonDownStairsMonday == undefined) setSelectedAfternoonDownStairsMonday('X6');
        if (selectedAfternoonDownStairsTuesday == "" || selectedAfternoonDownStairsTuesday == null == selectedAfternoonDownStairsTuesday == undefined) setSelectedAfternoonDownStairsTuesday('X7');
        if (selectedAfternoonDownStairsWednesday == "" || selectedAfternoonDownStairsWednesday == null == selectedAfternoonDownStairsWednesday == undefined) setSelectedAfternoonDownStairsWednesday('X1');
        if (selectedAfternoonDownStairsThursday == "" || selectedAfternoonDownStairsThursday == null == selectedAfternoonDownStairsThursday == undefined) setSelectedAfternoonDownStairsThursday('X2');
        if (selectedAfternoonDownStairsFriday == "" || selectedAfternoonDownStairsFriday == null == selectedAfternoonDownStairsFriday == undefined) setSelectedAfternoonDownStairsFriday('X3');
        if (selectedAfternoonParkingLotMonday == "" || selectedAfternoonParkingLotMonday == null == selectedAfternoonParkingLotMonday == undefined) setSelectedAfternoonParkingLotMonday('X4');
        if (selectedAfternoonParkingLotTuesday == "" || selectedAfternoonParkingLotTuesday == null == selectedAfternoonParkingLotTuesday == undefined) setSelectedAfternoonParkingLotTuesday('X5');
        if (selectedAfternoonParkingLotWednesday == "" || selectedAfternoonParkingLotWednesday == null == selectedAfternoonParkingLotWednesday == undefined) setSelectedAfternoonParkingLotWednesday('X6');
        if (selectedAfternoonParkingLotThursday == "" || selectedAfternoonParkingLotThursday == null == selectedAfternoonParkingLotThursday == undefined) setSelectedAfternoonParkingLotThursday('X7');
        if (selectedAfternoonParkingLotFriday == "" || selectedAfternoonParkingLotFriday == null == selectedAfternoonParkingLotFriday == undefined) setSelectedAfternoonParkingLotFriday('X1');
        if (selectedMorningUpStairsMonday == "" || selectedMorningUpStairsMonday == null == selectedMorningUpStairsMonday == undefined) setSelectedMorningUpStairsMonday('X2');

    }

    const ClearAllState = () => {
        setSelectedMorningUpStairsMonday('');
        setSelectedMorningUpStairsTuesday('');
        setSelectedMorningUpStairsWednesday('');
        setSelectedMorningUpStairsThursday('');
        setSelectedMorningUpStairsFriday('');
        setSelectedMorningDownStairsMonday('');
        setSelectedMorningDownStairsTuesday('');
        setSelectedMorningDownStairsWednesday('');
        setSelectedMorningDownStairsThursday('');
        setSelectedMorningDownStairsFriday('');
        setSelectedMorningParkingLotMonday('');
        setSelectedMorningParkingLotTuesday('');
        setSelectedMorningParkingLotWednesday('');
        setSelectedMorningParkingLotThursday('');
        setSelectedMorningParkingLotFriday('');
        setSelectedLunchAMonday('');
        setSelectedLunchATuesday('');
        setSelectedLunchAWednesday('');
        setSelectedLunchAThursday('');
        setSelectedLunchAFriday('');
        setSelectedLunchBMonday('');
        setSelectedLunchBTuesday('');
        setSelectedLunchBWednesday('');
        setSelectedLunchBThursday('');
        setSelectedLunchBFriday('');
        setSelectedLunchCMonday('');
        setSelectedLunchCTuesday('');
        setSelectedLunchCWednesday('');
        setSelectedLunchCThursday('');
        setSelectedLunchCFriday('');
        setSelectedLunchDMonday('');
        setSelectedLunchDTuesday('');
        setSelectedLunchDWednesday('');
        setSelectedLunchDThursday('');
        setSelectedLunchDFriday('');
        setSelectedAfternoonUpStairsMonday('');
        setSelectedAfternoonUpStairsTuesday('');
        setSelectedAfternoonUpStairsWednesday('');
        setSelectedAfternoonUpStairsThursday('');
        setSelectedAfternoonUpStairsFriday('');
        setSelectedAfternoonDownStairsMonday('');
        setSelectedAfternoonDownStairsTuesday('');
        setSelectedAfternoonDownStairsWednesday('');
        setSelectedAfternoonDownStairsThursday('');
        setSelectedAfternoonDownStairsFriday('');
        setSelectedAfternoonParkingLotMonday('');
        setSelectedAfternoonParkingLotTuesday('');
        setSelectedAfternoonParkingLotWednesday('');
        setSelectedAfternoonParkingLotThursday('');
        setSelectedAfternoonParkingLotFriday('');

    }

    const updateMondayValue = (value, type) => {
        const MondayValue = [selectedMorningUpStairsMonday, selectedMorningDownStairsMonday, selectedMorningParkingLotMonday, selectedLunchAMonday, selectedLunchBMonday, selectedLunchCMonday, selectedLunchDMonday, selectedAfternoonUpStairsMonday, selectedAfternoonDownStairsMonday, selectedAfternoonParkingLotMonday];
        const X1MondayValue = MondayValue?.filter(item => item === 'X1')?.length > 0 ? MondayValue?.filter(item => item === 'X1').length : 0;
        const X2MondayValue = MondayValue?.filter(item => item === 'X2')?.length > 0 ? MondayValue?.filter(item => item === 'X2').length : 0;
        const X3MondayValue = MondayValue?.filter(item => item === 'X3')?.length > 0 ? MondayValue?.filter(item => item === 'X3').length : 0;
        const X4MondayValue = MondayValue?.filter(item => item === 'X4')?.length > 0 ? MondayValue?.filter(item => item === 'X4').length : 0;
        const X5MondayValue = MondayValue?.filter(item => item === 'X5')?.length > 0 ? MondayValue?.filter(item => item === 'X5').length : 0;
        const X6MondayValue = MondayValue?.filter(item => item === 'X6')?.length > 0 ? MondayValue?.filter(item => item === 'X6').length : 0;
        const X7MondayValue = MondayValue?.filter(item => item === 'X7')?.length > 0 ? MondayValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1MondayValue >= 2) {
            setDialogMessage("X1 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2MondayValue >= 2) {
            setDialogMessage("X2 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3MondayValue >= 2) {
            setDialogMessage("X3 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4MondayValue >= 2) {
            setDialogMessage("X4 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5MondayValue >= 2) {
            setDialogMessage("X5 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6MondayValue >= 2) {
            setDialogMessage("X6 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7MondayValue >= 2) {
            setDialogMessage("X7 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }

        const weeklyValue = [selectedMorningUpStairsMonday,
            selectedMorningUpStairsTuesday,
            selectedMorningUpStairsWednesday,
            selectedMorningUpStairsThursday,
            selectedMorningUpStairsFriday,
            selectedMorningDownStairsMonday,
            selectedMorningDownStairsTuesday,
            selectedMorningDownStairsWednesday,
            selectedMorningDownStairsThursday,
            selectedMorningDownStairsFriday,
            selectedMorningParkingLotMonday,
            selectedMorningParkingLotTuesday,
            selectedMorningParkingLotWednesday,
            selectedMorningParkingLotThursday,
            selectedMorningParkingLotFriday,
            selectedLunchAMonday,
            selectedLunchATuesday,
            selectedLunchAWednesday,
            selectedLunchAThursday,
            selectedLunchAFriday,
            selectedLunchBMonday,
            selectedLunchBTuesday,
            selectedLunchBWednesday,
            selectedLunchBThursday,
            selectedLunchBFriday,
            selectedLunchCMonday,
            selectedLunchCTuesday,
            selectedLunchCWednesday,
            selectedLunchCThursday,
            selectedLunchCFriday,
            selectedLunchDMonday,
            selectedLunchDTuesday,
            selectedLunchDWednesday,
            selectedLunchDThursday,
            selectedLunchDFriday,
            selectedAfternoonUpStairsMonday,
            selectedAfternoonUpStairsTuesday,
            selectedAfternoonUpStairsWednesday,
            selectedAfternoonUpStairsThursday,
            selectedAfternoonUpStairsFriday,
            selectedAfternoonDownStairsMonday,
            selectedAfternoonDownStairsTuesday,
            selectedAfternoonDownStairsWednesday,
            selectedAfternoonDownStairsThursday,
            selectedAfternoonDownStairsFriday,
            selectedAfternoonParkingLotMonday,
            selectedAfternoonParkingLotTuesday,
            selectedAfternoonParkingLotWednesday,
            selectedAfternoonParkingLotThursday,
            selectedAfternoonParkingLotFriday,
        ];
        const X1weeklyValue = weeklyValue?.filter(item => item === 'X1')?.length > 0 ? weeklyValue?.filter(item => item === 'X1').length : 0;
        const X2weeklyValue = weeklyValue?.filter(item => item === 'X2')?.length > 0 ? weeklyValue?.filter(item => item === 'X2').length : 0;
        const X3weeklyValue = weeklyValue?.filter(item => item === 'X3')?.length > 0 ? weeklyValue?.filter(item => item === 'X3').length : 0;
        const X4weeklyValue = weeklyValue?.filter(item => item === 'X4')?.length > 0 ? weeklyValue?.filter(item => item === 'X4').length : 0;
        const X5weeklyValue = weeklyValue?.filter(item => item === 'X5')?.length > 0 ? weeklyValue?.filter(item => item === 'X5').length : 0;
        const X6weeklyValue = weeklyValue?.filter(item => item === 'X6')?.length > 0 ? weeklyValue?.filter(item => item === 'X6').length : 0;
        const X7weeklyValue = weeklyValue?.filter(item => item === 'X7')?.length > 0 ? weeklyValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1weeklyValue >= 7) {
            setDialogMessage("X1 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2weeklyValue >= 7) {
            setDialogMessage("X2 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3weeklyValue >= 7) {
            setDialogMessage("X3 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4weeklyValue >= 7) {
            setDialogMessage("X4 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5weeklyValue >= 7) {
            setDialogMessage("X5 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6weeklyValue >= 7) {
            setDialogMessage("X6 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7weeklyValue >= 7) {
            setDialogMessage("X7 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }

        if (type == 'MorningUpStairsMonday') {
            setSelectedMorningUpStairsMonday(value);
        } else if (type == 'MorningDownStairsMonday') {
            setSelectedMorningDownStairsMonday(value);
        } else if (type == 'MorningParkingLotMonday') {
            setSelectedMorningParkingLotMonday(value);
        } else if (type == 'LunchAMonday') {
            setSelectedLunchAMonday(value);
        } else if (type == 'LunchBMonday') {
            setSelectedLunchBMonday(value);
        } else if (type == 'LunchCMonday') {
            setSelectedLunchCMonday(value);
        } else if (type == 'LunchDMonday') {
            setSelectedLunchDMonday(value);
        } else if (type == 'AfternoonUpStairsMonday') {
            setSelectedAfternoonUpStairsMonday(value);
        } else if (type == 'AfternoonDownStairsMonday') {
            setSelectedAfternoonDownStairsMonday(value);
        } else if (type == 'AfternoonParkingLotMonday') {
            setSelectedAfternoonParkingLotMonday(value);
        }
        updateAllValue();
    }
    const updateTuesdayValue = (value, type) => {
        const TuesdayValue = [selectedMorningUpStairsTuesday, selectedMorningDownStairsTuesday, selectedMorningParkingLotTuesday, selectedLunchATuesday, selectedLunchBTuesday, selectedLunchCTuesday, selectedLunchDTuesday, selectedAfternoonUpStairsTuesday, selectedAfternoonDownStairsTuesday, selectedAfternoonParkingLotTuesday];
        const X1TuesdayValue = TuesdayValue?.filter(item => item === 'X1')?.length > 0 ? TuesdayValue?.filter(item => item === 'X1').length : 0;
        const X2TuesdayValue = TuesdayValue?.filter(item => item === 'X2')?.length > 0 ? TuesdayValue?.filter(item => item === 'X2').length : 0;
        const X3TuesdayValue = TuesdayValue?.filter(item => item === 'X3')?.length > 0 ? TuesdayValue?.filter(item => item === 'X3').length : 0;
        const X4TuesdayValue = TuesdayValue?.filter(item => item === 'X4')?.length > 0 ? TuesdayValue?.filter(item => item === 'X4').length : 0;
        const X5TuesdayValue = TuesdayValue?.filter(item => item === 'X5')?.length > 0 ? TuesdayValue?.filter(item => item === 'X5').length : 0;
        const X6TuesdayValue = TuesdayValue?.filter(item => item === 'X6')?.length > 0 ? TuesdayValue?.filter(item => item === 'X6').length : 0;
        const X7TuesdayValue = TuesdayValue?.filter(item => item === 'X7')?.length > 0 ? TuesdayValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1TuesdayValue >= 2) {
            setDialogMessage("X1 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2TuesdayValue >= 2) {
            setDialogMessage("X2 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3TuesdayValue >= 2) {
            setDialogMessage("X3 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4TuesdayValue >= 2) {
            setDialogMessage("X4 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5TuesdayValue >= 2) {
            setDialogMessage("X5 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6TuesdayValue >= 2) {
            setDialogMessage("X6 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7TuesdayValue >= 2) {
            setDialogMessage("X7 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }

        const weeklyValue = [selectedMorningUpStairsMonday,
            selectedMorningUpStairsTuesday,
            selectedMorningUpStairsWednesday,
            selectedMorningUpStairsThursday,
            selectedMorningUpStairsFriday,
            selectedMorningDownStairsMonday,
            selectedMorningDownStairsTuesday,
            selectedMorningDownStairsWednesday,
            selectedMorningDownStairsThursday,
            selectedMorningDownStairsFriday,
            selectedMorningParkingLotMonday,
            selectedMorningParkingLotTuesday,
            selectedMorningParkingLotWednesday,
            selectedMorningParkingLotThursday,
            selectedMorningParkingLotFriday,
            selectedLunchAMonday,
            selectedLunchATuesday,
            selectedLunchAWednesday,
            selectedLunchAThursday,
            selectedLunchAFriday,
            selectedLunchBMonday,
            selectedLunchBTuesday,
            selectedLunchBWednesday,
            selectedLunchBThursday,
            selectedLunchBFriday,
            selectedLunchCMonday,
            selectedLunchCTuesday,
            selectedLunchCWednesday,
            selectedLunchCThursday,
            selectedLunchCFriday,
            selectedLunchDMonday,
            selectedLunchDTuesday,
            selectedLunchDWednesday,
            selectedLunchDThursday,
            selectedLunchDFriday,
            selectedAfternoonUpStairsMonday,
            selectedAfternoonUpStairsTuesday,
            selectedAfternoonUpStairsWednesday,
            selectedAfternoonUpStairsThursday,
            selectedAfternoonUpStairsFriday,
            selectedAfternoonDownStairsMonday,
            selectedAfternoonDownStairsTuesday,
            selectedAfternoonDownStairsWednesday,
            selectedAfternoonDownStairsThursday,
            selectedAfternoonDownStairsFriday,
            selectedAfternoonParkingLotMonday,
            selectedAfternoonParkingLotTuesday,
            selectedAfternoonParkingLotWednesday,
            selectedAfternoonParkingLotThursday,
            selectedAfternoonParkingLotFriday,
        ];
        const X1weeklyValue = weeklyValue?.filter(item => item === 'X1')?.length > 0 ? weeklyValue?.filter(item => item === 'X1').length : 0;
        const X2weeklyValue = weeklyValue?.filter(item => item === 'X2')?.length > 0 ? weeklyValue?.filter(item => item === 'X2').length : 0;
        const X3weeklyValue = weeklyValue?.filter(item => item === 'X3')?.length > 0 ? weeklyValue?.filter(item => item === 'X3').length : 0;
        const X4weeklyValue = weeklyValue?.filter(item => item === 'X4')?.length > 0 ? weeklyValue?.filter(item => item === 'X4').length : 0;
        const X5weeklyValue = weeklyValue?.filter(item => item === 'X5')?.length > 0 ? weeklyValue?.filter(item => item === 'X5').length : 0;
        const X6weeklyValue = weeklyValue?.filter(item => item === 'X6')?.length > 0 ? weeklyValue?.filter(item => item === 'X6').length : 0;
        const X7weeklyValue = weeklyValue?.filter(item => item === 'X7')?.length > 0 ? weeklyValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1weeklyValue >= 7) {
            setDialogMessage("X1 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2weeklyValue >= 7) {
            setDialogMessage("X2 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3weeklyValue >= 7) {
            setDialogMessage("X3 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4weeklyValue >= 7) {
            setDialogMessage("X4 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5weeklyValue >= 7) {
            setDialogMessage("X5 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6weeklyValue >= 7) {
            setDialogMessage("X6 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7weeklyValue >= 7) {
            setDialogMessage("X7 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }

        if (type == 'MorningUpStairsTuesday') {
            setSelectedMorningUpStairsTuesday(value);
        } else if (type == 'MorningDownStairsTuesday') {
            setSelectedMorningDownStairsTuesday(value);
        } else if (type == 'MorningParkingLotTuesday') {
            setSelectedMorningParkingLotTuesday(value);
        } else if (type == 'LunchATuesday') {
            setSelectedLunchATuesday(value);
        } else if (type == 'LunchBTuesday') {
            setSelectedLunchBTuesday(value);
        } else if (type == 'LunchCTuesday') {
            setSelectedLunchCTuesday(value);
        } else if (type == 'LunchDTuesday') {
            setSelectedLunchDTuesday(value);
        } else if (type == 'AfternoonUpStairsTuesday') {
            setSelectedAfternoonUpStairsTuesday(value);
        } else if (type == 'AfternoonDownStairsTuesday') {
            setSelectedAfternoonDownStairsTuesday(value);
        } else if (type == 'AfternoonParkingLotTuesday') {
            setSelectedAfternoonParkingLotTuesday(value);
        }
        updateAllValue();
    }
    const updateWednesdayValue = (value, type) => {
        const WednesdayValue = [selectedMorningUpStairsWednesday, selectedMorningDownStairsWednesday, selectedMorningParkingLotWednesday, selectedLunchAWednesday, selectedLunchBWednesday, selectedLunchCWednesday, selectedLunchDWednesday, selectedAfternoonUpStairsWednesday, selectedAfternoonDownStairsWednesday, selectedAfternoonParkingLotWednesday];
        const X1WednesdayValue = WednesdayValue?.filter(item => item === 'X1')?.length > 0 ? WednesdayValue?.filter(item => item === 'X1').length : 0;
        const X2WednesdayValue = WednesdayValue?.filter(item => item === 'X2')?.length > 0 ? WednesdayValue?.filter(item => item === 'X2').length : 0;
        const X3WednesdayValue = WednesdayValue?.filter(item => item === 'X3')?.length > 0 ? WednesdayValue?.filter(item => item === 'X3').length : 0;
        const X4WednesdayValue = WednesdayValue?.filter(item => item === 'X4')?.length > 0 ? WednesdayValue?.filter(item => item === 'X4').length : 0;
        const X5WednesdayValue = WednesdayValue?.filter(item => item === 'X5')?.length > 0 ? WednesdayValue?.filter(item => item === 'X5').length : 0;
        const X6WednesdayValue = WednesdayValue?.filter(item => item === 'X6')?.length > 0 ? WednesdayValue?.filter(item => item === 'X6').length : 0;
        const X7WednesdayValue = WednesdayValue?.filter(item => item === 'X7')?.length > 0 ? WednesdayValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1WednesdayValue >= 2) {
            setDialogMessage("X1 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2WednesdayValue >= 2) {
            setDialogMessage("X2 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3WednesdayValue >= 2) {
            setDialogMessage("X3 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4WednesdayValue >= 2) {
            setDialogMessage("X4 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5WednesdayValue >= 2) {
            setDialogMessage("X5 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6WednesdayValue >= 2) {
            setDialogMessage("X6 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7WednesdayValue >= 2) {
            setDialogMessage("X7 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }

        const weeklyValue = [selectedMorningUpStairsMonday,
            selectedMorningUpStairsTuesday,
            selectedMorningUpStairsWednesday,
            selectedMorningUpStairsThursday,
            selectedMorningUpStairsFriday,
            selectedMorningDownStairsMonday,
            selectedMorningDownStairsTuesday,
            selectedMorningDownStairsWednesday,
            selectedMorningDownStairsThursday,
            selectedMorningDownStairsFriday,
            selectedMorningParkingLotMonday,
            selectedMorningParkingLotTuesday,
            selectedMorningParkingLotWednesday,
            selectedMorningParkingLotThursday,
            selectedMorningParkingLotFriday,
            selectedLunchAMonday,
            selectedLunchATuesday,
            selectedLunchAWednesday,
            selectedLunchAThursday,
            selectedLunchAFriday,
            selectedLunchBMonday,
            selectedLunchBTuesday,
            selectedLunchBWednesday,
            selectedLunchBThursday,
            selectedLunchBFriday,
            selectedLunchCMonday,
            selectedLunchCTuesday,
            selectedLunchCWednesday,
            selectedLunchCThursday,
            selectedLunchCFriday,
            selectedLunchDMonday,
            selectedLunchDTuesday,
            selectedLunchDWednesday,
            selectedLunchDThursday,
            selectedLunchDFriday,
            selectedAfternoonUpStairsMonday,
            selectedAfternoonUpStairsTuesday,
            selectedAfternoonUpStairsWednesday,
            selectedAfternoonUpStairsThursday,
            selectedAfternoonUpStairsFriday,
            selectedAfternoonDownStairsMonday,
            selectedAfternoonDownStairsTuesday,
            selectedAfternoonDownStairsWednesday,
            selectedAfternoonDownStairsThursday,
            selectedAfternoonDownStairsFriday,
            selectedAfternoonParkingLotMonday,
            selectedAfternoonParkingLotTuesday,
            selectedAfternoonParkingLotWednesday,
            selectedAfternoonParkingLotThursday,
            selectedAfternoonParkingLotFriday,
        ];
        const X1weeklyValue = weeklyValue?.filter(item => item === 'X1')?.length > 0 ? weeklyValue?.filter(item => item === 'X1').length : 0;
        const X2weeklyValue = weeklyValue?.filter(item => item === 'X2')?.length > 0 ? weeklyValue?.filter(item => item === 'X2').length : 0;
        const X3weeklyValue = weeklyValue?.filter(item => item === 'X3')?.length > 0 ? weeklyValue?.filter(item => item === 'X3').length : 0;
        const X4weeklyValue = weeklyValue?.filter(item => item === 'X4')?.length > 0 ? weeklyValue?.filter(item => item === 'X4').length : 0;
        const X5weeklyValue = weeklyValue?.filter(item => item === 'X5')?.length > 0 ? weeklyValue?.filter(item => item === 'X5').length : 0;
        const X6weeklyValue = weeklyValue?.filter(item => item === 'X6')?.length > 0 ? weeklyValue?.filter(item => item === 'X6').length : 0;
        const X7weeklyValue = weeklyValue?.filter(item => item === 'X7')?.length > 0 ? weeklyValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1weeklyValue >= 7) {
            setDialogMessage("X1 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2weeklyValue >= 7) {
            setDialogMessage("X2 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3weeklyValue >= 7) {
            setDialogMessage("X3 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4weeklyValue >= 7) {
            setDialogMessage("X4 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5weeklyValue >= 7) {
            setDialogMessage("X5 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6weeklyValue >= 7) {
            setDialogMessage("X6 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7weeklyValue >= 7) {
            setDialogMessage("X7 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }

        if (type == 'MorningUpStairsWednesday') {
            setSelectedMorningUpStairsWednesday(value);
        } else if (type == 'MorningDownStairsWednesday') {
            setSelectedMorningDownStairsWednesday(value);
        } else if (type == 'MorningParkingLotWednesday') {
            setSelectedMorningParkingLotWednesday(value);
        } else if (type == 'LunchAWednesday') {
            setSelectedLunchAWednesday(value);
        } else if (type == 'LunchBWednesday') {
            setSelectedLunchBWednesday(value);
        } else if (type == 'LunchCWednesday') {
            setSelectedLunchCWednesday(value);
        } else if (type == 'LunchDWednesday') {
            setSelectedLunchDWednesday(value);
        } else if (type == 'AfternoonUpStairsWednesday') {
            setSelectedAfternoonUpStairsWednesday(value);
        } else if (type == 'AfternoonDownStairsWednesday') {
            setSelectedAfternoonDownStairsWednesday(value);
        } else if (type == 'AfternoonParkingLotWednesday') {
            setSelectedAfternoonParkingLotWednesday(value);
        }
        updateAllValue();
    }

    const updateThursdayValue = (value, type) => {
        const ThursdayValue = [selectedMorningUpStairsThursday, selectedMorningDownStairsThursday, selectedMorningParkingLotThursday, selectedLunchAThursday, selectedLunchBThursday, selectedLunchCThursday, selectedLunchDThursday, selectedAfternoonUpStairsThursday, selectedAfternoonDownStairsThursday, selectedAfternoonParkingLotThursday];
        const X1ThursdayValue = ThursdayValue?.filter(item => item === 'X1')?.length > 0 ? ThursdayValue?.filter(item => item === 'X1').length : 0;
        const X2ThursdayValue = ThursdayValue?.filter(item => item === 'X2')?.length > 0 ? ThursdayValue?.filter(item => item === 'X2').length : 0;
        const X3ThursdayValue = ThursdayValue?.filter(item => item === 'X3')?.length > 0 ? ThursdayValue?.filter(item => item === 'X3').length : 0;
        const X4ThursdayValue = ThursdayValue?.filter(item => item === 'X4')?.length > 0 ? ThursdayValue?.filter(item => item === 'X4').length : 0;
        const X5ThursdayValue = ThursdayValue?.filter(item => item === 'X5')?.length > 0 ? ThursdayValue?.filter(item => item === 'X5').length : 0;
        const X6ThursdayValue = ThursdayValue?.filter(item => item === 'X6')?.length > 0 ? ThursdayValue?.filter(item => item === 'X6').length : 0;
        const X7ThursdayValue = ThursdayValue?.filter(item => item === 'X7')?.length > 0 ? ThursdayValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1ThursdayValue >= 2) {
            setDialogMessage("X1 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2ThursdayValue >= 2) {
            setDialogMessage("X2 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3ThursdayValue >= 2) {
            setDialogMessage("X3 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4ThursdayValue >= 2) {
            setDialogMessage("X4 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5ThursdayValue >= 2) {
            setDialogMessage("X5 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6ThursdayValue >= 2) {
            setDialogMessage("X6 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7ThursdayValue >= 2) {
            setDialogMessage("X7 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }

        const weeklyValue = [selectedMorningUpStairsMonday,
            selectedMorningUpStairsTuesday,
            selectedMorningUpStairsWednesday,
            selectedMorningUpStairsThursday,
            selectedMorningUpStairsFriday,
            selectedMorningDownStairsMonday,
            selectedMorningDownStairsTuesday,
            selectedMorningDownStairsWednesday,
            selectedMorningDownStairsThursday,
            selectedMorningDownStairsFriday,
            selectedMorningParkingLotMonday,
            selectedMorningParkingLotTuesday,
            selectedMorningParkingLotWednesday,
            selectedMorningParkingLotThursday,
            selectedMorningParkingLotFriday,
            selectedLunchAMonday,
            selectedLunchATuesday,
            selectedLunchAWednesday,
            selectedLunchAThursday,
            selectedLunchAFriday,
            selectedLunchBMonday,
            selectedLunchBTuesday,
            selectedLunchBWednesday,
            selectedLunchBThursday,
            selectedLunchBFriday,
            selectedLunchCMonday,
            selectedLunchCTuesday,
            selectedLunchCWednesday,
            selectedLunchCThursday,
            selectedLunchCFriday,
            selectedLunchDMonday,
            selectedLunchDTuesday,
            selectedLunchDWednesday,
            selectedLunchDThursday,
            selectedLunchDFriday,
            selectedAfternoonUpStairsMonday,
            selectedAfternoonUpStairsTuesday,
            selectedAfternoonUpStairsWednesday,
            selectedAfternoonUpStairsThursday,
            selectedAfternoonUpStairsFriday,
            selectedAfternoonDownStairsMonday,
            selectedAfternoonDownStairsTuesday,
            selectedAfternoonDownStairsWednesday,
            selectedAfternoonDownStairsThursday,
            selectedAfternoonDownStairsFriday,
            selectedAfternoonParkingLotMonday,
            selectedAfternoonParkingLotTuesday,
            selectedAfternoonParkingLotWednesday,
            selectedAfternoonParkingLotThursday,
            selectedAfternoonParkingLotFriday,
        ];
        const X1weeklyValue = weeklyValue?.filter(item => item === 'X1')?.length > 0 ? weeklyValue?.filter(item => item === 'X1').length : 0;
        const X2weeklyValue = weeklyValue?.filter(item => item === 'X2')?.length > 0 ? weeklyValue?.filter(item => item === 'X2').length : 0;
        const X3weeklyValue = weeklyValue?.filter(item => item === 'X3')?.length > 0 ? weeklyValue?.filter(item => item === 'X3').length : 0;
        const X4weeklyValue = weeklyValue?.filter(item => item === 'X4')?.length > 0 ? weeklyValue?.filter(item => item === 'X4').length : 0;
        const X5weeklyValue = weeklyValue?.filter(item => item === 'X5')?.length > 0 ? weeklyValue?.filter(item => item === 'X5').length : 0;
        const X6weeklyValue = weeklyValue?.filter(item => item === 'X6')?.length > 0 ? weeklyValue?.filter(item => item === 'X6').length : 0;
        const X7weeklyValue = weeklyValue?.filter(item => item === 'X7')?.length > 0 ? weeklyValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1weeklyValue >= 7) {
            setDialogMessage("X1 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2weeklyValue >= 7) {
            setDialogMessage("X2 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3weeklyValue >= 7) {
            setDialogMessage("X3 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4weeklyValue >= 7) {
            setDialogMessage("X4 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5weeklyValue >= 7) {
            setDialogMessage("X5 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6weeklyValue >= 7) {
            setDialogMessage("X6 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7weeklyValue >= 7) {
            setDialogMessage("X7 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }

        if (type == 'MorningUpStairsThursday') {
            setSelectedMorningUpStairsThursday(value);
        } else if (type == 'MorningDownStairsThursday') {
            setSelectedMorningDownStairsThursday(value);
        } else if (type == 'MorningParkingLotThursday') {
            setSelectedMorningParkingLotThursday(value);
        } else if (type == 'LunchAThursday') {
            setSelectedLunchAThursday(value);
        } else if (type == 'LunchBThursday') {
            setSelectedLunchBThursday(value);
        } else if (type == 'LunchCThursday') {
            setSelectedLunchCThursday(value);
        } else if (type == 'LunchDThursday') {
            setSelectedLunchDThursday(value);
        } else if (type == 'AfternoonUpStairsThursday') {
            setSelectedAfternoonUpStairsThursday(value);
        } else if (type == 'AfternoonDownStairsThursday') {
            setSelectedAfternoonDownStairsThursday(value);
        } else if (type == 'AfternoonParkingLotThursday') {
            setSelectedAfternoonParkingLotThursday(value);
        }
        updateAllValue();
    }

    const updateFridayValue = (value, type) => {
        const FridayValue = [selectedMorningUpStairsFriday, selectedMorningDownStairsFriday, selectedMorningParkingLotFriday, selectedLunchAFriday, selectedLunchBFriday, selectedLunchCFriday, selectedLunchDFriday, selectedAfternoonUpStairsFriday, selectedAfternoonDownStairsFriday, selectedAfternoonParkingLotFriday];
        const X1FridayValue = FridayValue?.filter(item => item === 'X1')?.length > 0 ? FridayValue?.filter(item => item === 'X1').length : 0;
        const X2FridayValue = FridayValue?.filter(item => item === 'X2')?.length > 0 ? FridayValue?.filter(item => item === 'X2').length : 0;
        const X3FridayValue = FridayValue?.filter(item => item === 'X3')?.length > 0 ? FridayValue?.filter(item => item === 'X3').length : 0;
        const X4FridayValue = FridayValue?.filter(item => item === 'X4')?.length > 0 ? FridayValue?.filter(item => item === 'X4').length : 0;
        const X5FridayValue = FridayValue?.filter(item => item === 'X5')?.length > 0 ? FridayValue?.filter(item => item === 'X5').length : 0;
        const X6FridayValue = FridayValue?.filter(item => item === 'X6')?.length > 0 ? FridayValue?.filter(item => item === 'X6').length : 0;
        const X7FridayValue = FridayValue?.filter(item => item === 'X7')?.length > 0 ? FridayValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1FridayValue >= 2) {
            setDialogMessage("X1 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2FridayValue >= 2) {
            setDialogMessage("X2 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3FridayValue >= 2) {
            setDialogMessage("X3 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4FridayValue >= 2) {
            setDialogMessage("X4 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5FridayValue >= 2) {
            setDialogMessage("X5 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6FridayValue >= 2) {
            setDialogMessage("X6 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7FridayValue >= 2) {
            setDialogMessage("X7 maximum size exceed. maximum 2 schedule allowed per day");
            handleClickOpen();
            return;
        }

        const weeklyValue = [selectedMorningUpStairsMonday,
            selectedMorningUpStairsTuesday,
            selectedMorningUpStairsWednesday,
            selectedMorningUpStairsThursday,
            selectedMorningUpStairsFriday,
            selectedMorningDownStairsMonday,
            selectedMorningDownStairsTuesday,
            selectedMorningDownStairsWednesday,
            selectedMorningDownStairsThursday,
            selectedMorningDownStairsFriday,
            selectedMorningParkingLotMonday,
            selectedMorningParkingLotTuesday,
            selectedMorningParkingLotWednesday,
            selectedMorningParkingLotThursday,
            selectedMorningParkingLotFriday,
            selectedLunchAMonday,
            selectedLunchATuesday,
            selectedLunchAWednesday,
            selectedLunchAThursday,
            selectedLunchAFriday,
            selectedLunchBMonday,
            selectedLunchBTuesday,
            selectedLunchBWednesday,
            selectedLunchBThursday,
            selectedLunchBFriday,
            selectedLunchCMonday,
            selectedLunchCTuesday,
            selectedLunchCWednesday,
            selectedLunchCThursday,
            selectedLunchCFriday,
            selectedLunchDMonday,
            selectedLunchDTuesday,
            selectedLunchDWednesday,
            selectedLunchDThursday,
            selectedLunchDFriday,
            selectedAfternoonUpStairsMonday,
            selectedAfternoonUpStairsTuesday,
            selectedAfternoonUpStairsWednesday,
            selectedAfternoonUpStairsThursday,
            selectedAfternoonUpStairsFriday,
            selectedAfternoonDownStairsMonday,
            selectedAfternoonDownStairsTuesday,
            selectedAfternoonDownStairsWednesday,
            selectedAfternoonDownStairsThursday,
            selectedAfternoonDownStairsFriday,
            selectedAfternoonParkingLotMonday,
            selectedAfternoonParkingLotTuesday,
            selectedAfternoonParkingLotWednesday,
            selectedAfternoonParkingLotThursday,
            selectedAfternoonParkingLotFriday,
        ];
        const X1weeklyValue = weeklyValue?.filter(item => item === 'X1')?.length > 0 ? weeklyValue?.filter(item => item === 'X1').length : 0;
        const X2weeklyValue = weeklyValue?.filter(item => item === 'X2')?.length > 0 ? weeklyValue?.filter(item => item === 'X2').length : 0;
        const X3weeklyValue = weeklyValue?.filter(item => item === 'X3')?.length > 0 ? weeklyValue?.filter(item => item === 'X3').length : 0;
        const X4weeklyValue = weeklyValue?.filter(item => item === 'X4')?.length > 0 ? weeklyValue?.filter(item => item === 'X4').length : 0;
        const X5weeklyValue = weeklyValue?.filter(item => item === 'X5')?.length > 0 ? weeklyValue?.filter(item => item === 'X5').length : 0;
        const X6weeklyValue = weeklyValue?.filter(item => item === 'X6')?.length > 0 ? weeklyValue?.filter(item => item === 'X6').length : 0;
        const X7weeklyValue = weeklyValue?.filter(item => item === 'X7')?.length > 0 ? weeklyValue?.filter(item => item === 'X7').length : 0;

        if (value === 'X1' && X1weeklyValue >= 7) {
            setDialogMessage("X1 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X2' && X2weeklyValue >= 7) {
            setDialogMessage("X2 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X3' && X3weeklyValue >= 7) {
            setDialogMessage("X3 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X4' && X4weeklyValue >= 7) {
            setDialogMessage("X4 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X5' && X5weeklyValue >= 7) {
            setDialogMessage("X5 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X6' && X6weeklyValue >= 7) {
            setDialogMessage("X6 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }
        if (value === 'X7' && X7weeklyValue >= 7) {
            setDialogMessage("X7 maximum size exceed. maximum 7 schedule allowed per week");
            handleClickOpen();
            return;
        }

        if (type == 'MorningUpStairsFriday') {
            setSelectedMorningUpStairsFriday(value);
        } else if (type == 'MorningDownStairsFriday') {
            setSelectedMorningDownStairsFriday(value);
        } else if (type == 'MorningParkingLotFriday') {
            setSelectedMorningParkingLotFriday(value);
        } else if (type == 'LunchAFriday') {
            setSelectedLunchAFriday(value);
        } else if (type == 'LunchBFriday') {
            setSelectedLunchBFriday(value);
        } else if (type == 'LunchCFriday') {
            setSelectedLunchCFriday(value);
        } else if (type == 'LunchDFriday') {
            setSelectedLunchDFriday(value);
        } else if (type == 'AfternoonUpStairsFriday') {
            setSelectedAfternoonUpStairsFriday(value);
        } else if (type == 'AfternoonDownStairsFriday') {
            setSelectedAfternoonDownStairsFriday(value);
        } else if (type == 'AfternoonParkingLotFriday') {
            setSelectedAfternoonParkingLotFriday(value);
        }
        updateAllValue();
    }


    return (
        <div>
            <div className='home_wrapper'>
                <h2 className='text-center my-3'>Schedule</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="Schedule table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Day</TableCell>
                                <TableCell align="center">Morning UpStairs</TableCell>
                                <TableCell align="center">Morning Down Stairs</TableCell>
                                <TableCell align="center">Morning Parking Lot</TableCell>
                                <TableCell align="center">Lunch A </TableCell>
                                <TableCell align="center">Lunch B </TableCell>
                                <TableCell align="center">Lunch C </TableCell>
                                <TableCell align="center">Lunch D </TableCell>
                                <TableCell align="center">Afternoon Up Stairs</TableCell>
                                <TableCell align="center">Afternoon Down Stairs</TableCell>
                                <TableCell align="center">Afternoon Parking Lot</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Monday
                                </TableCell>
                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningUpStairsMonday' id="select_schedule_MorningUpStairsMonday"
                                        value={selectedMorningUpStairsMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'MorningUpStairsMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningDownStairsMonday' id="select_schedule_MorningDownStairsMonday"
                                        value={selectedMorningDownStairsMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'MorningDownStairsMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningParkingLotMonday' id="select_schedule_MorningParkingLotMonday"
                                        value={selectedMorningParkingLotMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'MorningParkingLotMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchAMonday' id="select_schedule_LunchAMonday"
                                        value={selectedLunchAMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'LunchAMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchBMonday' id="select_schedule_LunchBMonday"
                                        value={selectedLunchBMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'LunchBMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchCMonday' id="select_schedule_LunchCMonday"
                                        value={selectedLunchCMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'LunchCMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchDMonday' id="select_schedule_LunchDMonday"
                                        value={selectedLunchDMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'LunchDMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonUpStairsMonday' id="select_schedule_AfternoonUpStairsMonday"
                                        value={selectedAfternoonUpStairsMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'AfternoonUpStairsMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonDownStairsMonday' id="select_schedule_AfternoonDownStairsMonday"
                                        value={selectedAfternoonDownStairsMonday}
                                        onChange={e => updateMondayValue(e.target.value, 'AfternoonDownStairsMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonParkingLotMonday' id="select_schedule_AfternoonParkingLotMonday"
                                        value={selectedAfternoonParkingLotMonday}
                                        onChange={e => setSelectedAfternoonParkingLotMonday(e.target.value, 'AfternoonParkingLotMonday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Tuesday
                                </TableCell>
                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningUpStairsTuesday' id="select_schedule_MorningUpStairsTuesday"
                                        value={selectedMorningUpStairsTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'MorningUpStairsTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningDownStairsTuesday' id="select_schedule_MorningDownStairsTuesday"
                                        value={selectedMorningDownStairsTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'MorningDownStairsTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningParkingLotTuesday' id="select_schedule_MorningParkingLotTuesday"
                                        value={selectedMorningParkingLotTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'MorningParkingLotTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchATuesday' id="select_schedule_LunchATuesday"
                                        value={selectedLunchATuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'LunchATuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchBTuesday' id="select_schedule_LunchBTuesday"
                                        value={selectedLunchBTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'LunchBTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchCTuesday' id="select_schedule_LunchCTuesday"
                                        value={selectedLunchCTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'LunchCTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchDTuesday' id="select_schedule_LunchDTuesday"
                                        value={selectedLunchDTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'LunchDTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonUpStairsTuesday' id="select_schedule_AfternoonUpStairsTuesday"
                                        value={selectedAfternoonUpStairsTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'AfternoonUpStairsTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonDownStairsTuesday' id="select_schedule_AfternoonDownStairsTuesday"
                                        value={selectedAfternoonDownStairsTuesday}
                                        onChange={e => updateTuesdayValue(e.target.value, 'AfternoonDownStairsTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonParkingLotTuesday' id="select_schedule_AfternoonParkingLotTuesday"
                                        value={selectedAfternoonParkingLotTuesday}
                                        onChange={e => setSelectedAfternoonParkingLotTuesday(e.target.value, 'AfternoonParkingLotTuesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Wednesday
                                </TableCell>
                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningUpStairsWednesday' id="select_schedule_MorningUpStairsWednesday"
                                        value={selectedMorningUpStairsWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'MorningUpStairsWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningDownStairsWednesday' id="select_schedule_MorningDownStairsWednesday"
                                        value={selectedMorningDownStairsWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'MorningDownStairsWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningParkingLotWednesday' id="select_schedule_MorningParkingLotWednesday"
                                        value={selectedMorningParkingLotWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'MorningParkingLotWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchAWednesday' id="select_schedule_LunchAWednesday"
                                        value={selectedLunchAWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'LunchAWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchBWednesday' id="select_schedule_LunchBWednesday"
                                        value={selectedLunchBWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'LunchBWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchCWednesday' id="select_schedule_LunchCWednesday"
                                        value={selectedLunchCWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'LunchCWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchDWednesday' id="select_schedule_LunchDWednesday"
                                        value={selectedLunchDWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'LunchDWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonUpStairsWednesday' id="select_schedule_AfternoonUpStairsWednesday"
                                        value={selectedAfternoonUpStairsWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'AfternoonUpStairsWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonDownStairsWednesday' id="select_schedule_AfternoonDownStairsWednesday"
                                        value={selectedAfternoonDownStairsWednesday}
                                        onChange={e => updateWednesdayValue(e.target.value, 'AfternoonDownStairsWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonParkingLotWednesday' id="select_schedule_AfternoonParkingLotWednesday"
                                        value={selectedAfternoonParkingLotWednesday}
                                        onChange={e => setSelectedAfternoonParkingLotWednesday(e.target.value, 'AfternoonParkingLotWednesday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Thursday
                                </TableCell>
                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningUpStairsThursday' id="select_schedule_MorningUpStairsThursday"
                                        value={selectedMorningUpStairsThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'MorningUpStairsThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningDownStairsThursday' id="select_schedule_MorningDownStairsThursday"
                                        value={selectedMorningDownStairsThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'MorningDownStairsThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningParkingLotThursday' id="select_schedule_MorningParkingLotThursday"
                                        value={selectedMorningParkingLotThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'MorningParkingLotThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchAThursday' id="select_schedule_LunchAThursday"
                                        value={selectedLunchAThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'LunchAThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchBThursday' id="select_schedule_LunchBThursday"
                                        value={selectedLunchBThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'LunchBThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchCThursday' id="select_schedule_LunchCThursday"
                                        value={selectedLunchCThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'LunchCThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchDThursday' id="select_schedule_LunchDThursday"
                                        value={selectedLunchDThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'LunchDThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonUpStairsThursday' id="select_schedule_AfternoonUpStairsThursday"
                                        value={selectedAfternoonUpStairsThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'AfternoonUpStairsThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonDownStairsThursday' id="select_schedule_AfternoonDownStairsThursday"
                                        value={selectedAfternoonDownStairsThursday}
                                        onChange={e => updateThursdayValue(e.target.value, 'AfternoonDownStairsThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonParkingLotThursday' id="select_schedule_AfternoonParkingLotThursday"
                                        value={selectedAfternoonParkingLotThursday}
                                        onChange={e => setSelectedAfternoonParkingLotThursday(e.target.value, 'AfternoonParkingLotThursday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Friday
                                </TableCell>
                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningUpStairsFriday' id="select_schedule_MorningUpStairsFriday"
                                        value={selectedMorningUpStairsFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'MorningUpStairsFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningDownStairsFriday' id="select_schedule_MorningDownStairsFriday"
                                        value={selectedMorningDownStairsFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'MorningDownStairsFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_MorningParkingLotFriday' id="select_schedule_MorningParkingLotFriday"
                                        value={selectedMorningParkingLotFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'MorningParkingLotFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchAFriday' id="select_schedule_LunchAFriday"
                                        value={selectedLunchAFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'LunchAFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchBFriday' id="select_schedule_LunchBFriday"
                                        value={selectedLunchBFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'LunchBFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchCFriday' id="select_schedule_LunchCFriday"
                                        value={selectedLunchCFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'LunchCFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_LunchDFriday' id="select_schedule_LunchDFriday"
                                        value={selectedLunchDFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'LunchDFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonUpStairsFriday' id="select_schedule_AfternoonUpStairsFriday"
                                        value={selectedAfternoonUpStairsFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'AfternoonUpStairsFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonDownStairsFriday' id="select_schedule_AfternoonDownStairsFriday"
                                        value={selectedAfternoonDownStairsFriday}
                                        onChange={e => updateFridayValue(e.target.value, 'AfternoonDownStairsFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                                <TableCell align="center">
                                    <Select fullWidth className='select_schedule select_AfternoonParkingLotFriday' id="select_schedule_AfternoonParkingLotFriday"
                                        value={selectedAfternoonParkingLotFriday}
                                        onChange={e => setSelectedAfternoonParkingLotFriday(e.target.value, 'AfternoonParkingLotFriday')}>
                                        {staffMembers.map((option, index) => {
                                            return <MenuItem value={option} key={index} >{option}</MenuItem>
                                        })}
                                    </Select>
                                </TableCell>


                            </TableRow>


                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className='home_wrapper'>
                <h2 className='text-center my-3'>Load</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="Schedule table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Staff Member</TableCell>
                                <TableCell align="center">Monday</TableCell>
                                <TableCell align="center">Tuesday</TableCell>
                                <TableCell align="center">Wednesday</TableCell>
                                <TableCell align="center">Thursday </TableCell>
                                <TableCell align="center">Friday </TableCell>
                                <TableCell align="center">Totals </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X1
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X1MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X1TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X1WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X1ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X1FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X1TotalValue}
                                </TableCell>
                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X2
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X2MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X2TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X2WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X2ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X2FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X2TotalValue}
                                </TableCell>
                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X3
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X3MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X3TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X3WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X3ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X3FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X3TotalValue}
                                </TableCell>
                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X4
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X4MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X4TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X4WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X4ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X4FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X4TotalValue}
                                </TableCell>
                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X5
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X5MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X5TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X5WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X5ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X5FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X5TotalValue}
                                </TableCell>
                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X6
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X6MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X6TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X6WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X6ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X6FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X6TotalValue}
                                </TableCell>
                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    X7
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X7MondayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X7TuesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X7WednesdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X7ThursdayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X7FridayValue}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {loadDataValue.X7TotalValue}
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className='my-4'>
                <div className='d-flex gap-10 jutify-content-end mt-5'>
                    <div>
                        <Button variant='contained' className='mx-2' onClick={randomizeData}>
                            Randomize Empty Shifts
                        </Button>
                        <Button variant='contained' className='mx-2' onClick={deleteHandler}>
                            Clear All Shifts
                        </Button>
                        <Button variant='contained' className='mx-2' onClick={submitHanlder}>
                            Save Progres
                        </Button>
                        <Button variant='contained' className='mx-2' onClick={getScheduleData}>
                            Retrive State
                        </Button>
                    </div>
                </div>
            </div>
            <Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Message"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">{dialogMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Okay</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        </div>
    );
}
