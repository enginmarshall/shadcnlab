'use client'
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"


function DemoComp() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <>
            <Button>Button</Button>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        </>
    )
}

export default DemoComp
