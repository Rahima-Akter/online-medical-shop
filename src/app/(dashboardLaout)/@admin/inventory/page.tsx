import MedicineInventory from '@/components/dashboard/admin/medicineInventory'
import React from 'react'

export default function Inventory({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  return (
    <div>
        <MedicineInventory searchParams={searchParams} />
    </div>
  )
}
