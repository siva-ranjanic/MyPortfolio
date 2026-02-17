import { Download, FileSpreadsheet } from 'lucide-react';

// 1. Define the shape of your data to satisfy TypeScript
interface MenuItem {
  userType: string;
  parentMenu: string;
  subModule: string;
  menuItem: string;
  sourceVol: string;
  context: string;
}

const Home = () => {

  // 2. Apply the interface to the data array
  const menuData: MenuItem[] = [
    // RE User - General Menus
    { userType: 'RE User', parentMenu: 'My Task', subModule: '—', menuItem: 'My Task', sourceVol: '—', context: 'Main Dashboard' },
    { userType: 'RE User', parentMenu: 'Notification', subModule: '—', menuItem: 'Notification', sourceVol: '—', context: 'Alerts & Updates' },
    
    // RE User - KYC Management Single Operation
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Search', sourceVol: 'Vol II', context: 'Search KYC Records' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Download', sourceVol: 'Vol II', context: 'Download KYC Data' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Create', sourceVol: 'Vol III', context: 'Create New KYC' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Update', sourceVol: 'Vol III', context: 'Update Existing KYC' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Client Initiated Update', sourceVol: 'Vol III', context: 'Client Update Request' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'De-activate', sourceVol: 'Vol IV', context: 'Deactivate KYC Record' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Re-activate', sourceVol: 'Vol IV', context: 'Reactivate KYC Record' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Suspend', sourceVol: 'Vol IV', context: 'Suspend KYC Record' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Revoke Suspension', sourceVol: 'Vol IV', context: 'Remove Suspension' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Rejected KYC Transaction', sourceVol: 'Vol III', context: 'View Rejected Records' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'View KYC Transaction', sourceVol: 'Vol III', context: 'View Transaction Details' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Create Draft', sourceVol: 'Vol III', context: 'Save as Draft' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Single Operation', menuItem: 'Update Draft', sourceVol: 'Vol III', context: 'Modify Draft' },
    
    // RE User - KYC Management Bulk Operation
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'Search', sourceVol: 'Vol II', context: 'Bulk Search' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'Download', sourceVol: 'Vol II', context: 'Bulk Download' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'Create', sourceVol: 'Vol III', context: 'Bulk Create KYC' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'Update', sourceVol: 'Vol III', context: 'Bulk Update KYC' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'De-activate', sourceVol: 'Vol IV', context: 'Bulk Deactivate' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'Probable Match Recon', sourceVol: 'Vol V', context: 'Match Reconciliation' },
    { userType: 'RE User', parentMenu: 'KYC Management', subModule: 'Bulk Operation', menuItem: 'View File Status', sourceVol: 'Vol VII', context: 'Check Upload Status' },
    
    // RE User - Probable Match Reconciliation
    { userType: 'RE User', parentMenu: 'Probable Match Reconciliation', subModule: '—', menuItem: 'Decision Pending', sourceVol: 'Vol V', context: 'Pending Decisions' },
    { userType: 'RE User', parentMenu: 'Probable Match Reconciliation', subModule: '—', menuItem: 'Approval Pending', sourceVol: 'Vol V', context: 'Pending Approvals' },
    
    // RE User - Client Relationship
    { userType: 'RE User', parentMenu: 'Client Relationship', subModule: '—', menuItem: 'Client Relationship', sourceVol: 'Vol V', context: 'Manage Relationships' },
    
    // CERSAI Admin - General
    { userType: 'CERSAI Admin', parentMenu: 'Notifications', subModule: '—', menuItem: 'Notification', sourceVol: '—', context: 'System Notifications' },
    
    // CERSAI Admin - KYC Management
    { userType: 'CERSAI Admin', parentMenu: 'KYC Management', subModule: '—', menuItem: 'De-activate', sourceVol: 'Vol VI', context: 'Admin Deactivation' },
    { userType: 'CERSAI Admin', parentMenu: 'KYC Management', subModule: 'Re-activate', menuItem: 'Raised by CERSAI', sourceVol: 'Vol VI', context: 'CERSAI Initiated' },
    { userType: 'CERSAI Admin', parentMenu: 'KYC Management', subModule: 'Re-activate', menuItem: 'Raised by RE', sourceVol: 'Vol VI', context: 'RE Requested' },
    { userType: 'CERSAI Admin', parentMenu: 'KYC Management', subModule: '—', menuItem: 'Suspend', sourceVol: 'Vol VI', context: 'Admin Suspension' },
    { userType: 'CERSAI Admin', parentMenu: 'KYC Management', subModule: '—', menuItem: 'Revoke Suspension', sourceVol: 'Vol VI', context: 'Remove Suspension' },
    
    // RE Checker - My Task Items
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Create (Approval)', sourceVol: 'Vol III', context: 'Approve Create Request' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Update (Approval)', sourceVol: 'Vol III', context: 'Approve Update Request' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'De-activate (Approval)', sourceVol: 'Vol IV', context: 'Approve Deactivation' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Re-activate (Approval)', sourceVol: 'Vol IV', context: 'Approve Reactivation' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Suspend (Approval)', sourceVol: 'Vol IV', context: 'Approve Suspension' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Revoke Suspension (Approval)', sourceVol: 'Vol IV', context: 'Approve Revocation' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Client Initiated Update (Approval)', sourceVol: 'Vol III', context: 'Approve Client Update' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Bulk Operation', menuItem: 'Create (Approval)', sourceVol: 'Vol III', context: 'Approve Bulk Create' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Bulk Operation', menuItem: 'Update (Approval)', sourceVol: 'Vol III', context: 'Approve Bulk Update' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Bulk Operation', menuItem: 'De-activate (Approval)', sourceVol: 'Vol IV', context: 'Approve Bulk Deactivate' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Bulk Operation', menuItem: 'Probable Match Recon (Approval)', sourceVol: 'Vol V', context: 'Approve Reconciliation' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'Client Relationship', menuItem: 'Client Relationship Closure (Approval)', sourceVol: 'Vol V', context: 'Approve Closure' },
    { userType: 'RE Checker', parentMenu: 'My Task', subModule: 'SFTP Operations', menuItem: 'Approve SFTP Upload', sourceVol: 'Vol VII', context: 'Approve File Upload' },
    
    // RE Maker - My Task Items
    { userType: 'RE Maker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Rejected KYC Transaction', sourceVol: 'Vol III', context: 'Correction Required' },
    { userType: 'RE Maker', parentMenu: 'My Task', subModule: 'Bulk Operation', menuItem: 'Probable Match Recon (Decision Pending)', sourceVol: 'Vol V', context: 'Decision Required' },
    
    // CERSAI Checker - My Task Items
    { userType: 'CERSAI Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'De-activate (Approval)', sourceVol: 'Vol VI', context: 'Approve Deactivation' },
    { userType: 'CERSAI Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Suspend (Approval)', sourceVol: 'Vol VI', context: 'Approve Suspension' },
    { userType: 'CERSAI Checker', parentMenu: 'My Task', subModule: 'Single Operation', menuItem: 'Revoke Suspension (Approval)', sourceVol: 'Vol VI', context: 'Approve Revocation' },
    { userType: 'CERSAI Checker', parentMenu: 'My Task', subModule: 'Re-activate', menuItem: 'Raised by CERSAI (Approval)', sourceVol: 'Vol VI', context: 'Approve CERSAI Request' },
    
    // CERSAI Approver - My Task Items
    { userType: 'CERSAI Approver I', parentMenu: 'My Task', subModule: 'Re-activate', menuItem: 'Raised by RE (Approval L1)', sourceVol: 'Vol VI', context: 'Level 1 Approval' },
    { userType: 'CERSAI Approver II', parentMenu: 'My Task', subModule: 'Re-activate', menuItem: 'Raised by RE (Approval L2)', sourceVol: 'Vol VI', context: 'Level 2 Approval' },
  ];

  const exportToCSV = () => {
    // Define headers
    const headers = ['User Type', 'Parent Menu', 'Sub-Module', 'Menu Item', 'Source Volume', 'Context/Description'];
    
    // Format data rows
    const rows = menuData.map(row => 
      [row.userType, row.parentMenu, row.subModule, row.menuItem, row.sourceVol, row.context]
        .map(cell => `"${cell}"`) // Wrap in quotes to handle commas within data
        .join(',')
    );

    // Combine headers and rows
    // \uFEFF is the BOM (Byte Order Mark) which helps Excel open the file with correct encoding
    const csvContent = "\uFEFF" + [headers.join(','), ...rows].join('\n');

    // Create download link and trigger click
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'KYC_System_Menu_Structure.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // 3. Fix the reduce function by explicitly typing the accumulator
  const groupedByUser = menuData.reduce((acc: Record<string, MenuItem[]>, item) => {
    if (!acc[item.userType]) {
        acc[item.userType] = [];
    }
    acc[item.userType].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>); // Initialize with typed object

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">KYC System Menu Structure</h1>
              <p className="text-gray-600">Complete menu mapping for all user roles</p>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-md cursor-pointer"
            >
              <Download size={20} />
              Export to Excel/CSV
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{menuData.length}</div>
              <div className="text-sm text-gray-600">Total Menu Items</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{Object.keys(groupedByUser).length}</div>
              <div className="text-sm text-gray-600">User Roles</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {[...new Set(menuData.map(m => m.parentMenu))].length}
              </div>
              <div className="text-sm text-gray-600">Parent Menus</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">7</div>
              <div className="text-sm text-gray-600">Source Volumes</div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">User Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Parent Menu</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Sub-Module</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Menu Item</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Source Vol</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Context</th>
                </tr>
              </thead>
              <tbody>
                {menuData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-indigo-50 transition-colors`}
                  >
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.userType.includes('CERSAI') ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {row.userType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.parentMenu}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.subModule}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{row.menuItem}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                        {row.sourceVol}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{row.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary by User Type */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(groupedByUser).map(([userType, items]) => (
            <div key={userType} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FileSpreadsheet size={20} className="text-indigo-600" />
                {userType}
              </h3>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-2xl text-indigo-600">{items.length}</span> menu items
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Click the "Export to Excel/CSV" button to download the complete menu structure. 
            The CSV file can be opened in Microsoft Excel, Google Sheets, or any spreadsheet application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;