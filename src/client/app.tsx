import React, {useRef} from 'react';

// ── Layout ──────────────────────────────────────────────────────────────────
import {Tabs} from '@servicenow/react-components/Tabs';
import {Card} from '@servicenow/react-components/Card';
import {CardDivider} from '@servicenow/react-components/CardDivider';
import {Accordion} from '@servicenow/react-components/Accordion';
import {AccordionItem} from '@servicenow/react-components/AccordionItem';
import {Modal} from '@servicenow/react-components/Modal';
import {Collapse} from '@servicenow/react-components/Collapse';

// ── Buttons & Actions ────────────────────────────────────────────────────────
import {Button} from '@servicenow/react-components/Button';
import {ButtonBare} from '@servicenow/react-components/ButtonBare';
import {ButtonIconic} from '@servicenow/react-components/ButtonIconic';
import {ButtonStateful} from '@servicenow/react-components/ButtonStateful';
import {SplitButton} from '@servicenow/react-components/SplitButton';
import {Dropdown} from '@servicenow/react-components/Dropdown';

// ── Form Inputs ──────────────────────────────────────────────────────────────
import {Input} from '@servicenow/react-components/Input';
import {InputUrl} from '@servicenow/react-components/InputUrl';
import {Textarea} from '@servicenow/react-components/Textarea';
import {Select} from '@servicenow/react-components/Select';
import {Typeahead} from '@servicenow/react-components/Typeahead';
import {TypeaheadMulti} from '@servicenow/react-components/TypeaheadMulti';
import {Checkbox} from '@servicenow/react-components/Checkbox';
import {Toggle} from '@servicenow/react-components/Toggle';
import {RadioButtons} from '@servicenow/react-components/RadioButtons';
import {DateTime} from '@servicenow/react-components/DateTime';

// ── Feedback & Display ───────────────────────────────────────────────────────
import {Alert} from '@servicenow/react-components/Alert';
import {Badge} from '@servicenow/react-components/Badge';
import {Loader} from '@servicenow/react-components/Loader';
import {ProgressBar} from '@servicenow/react-components/ProgressBar';
import {Tooltip} from '@servicenow/react-components/Tooltip';
import {Heading} from '@servicenow/react-components/Heading';
import {LabelValue} from '@servicenow/react-components/LabelValue';
import {LabelValueStacked} from '@servicenow/react-components/LabelValueStacked';
import {HighlightedValue} from '@servicenow/react-components/HighlightedValue';
import {Avatar} from '@servicenow/react-components/Avatar';
import {Icon} from '@servicenow/react-components/Icon';

// ── Navigation & Empty States ────────────────────────────────────────────────
import {Breadcrumbs} from '@servicenow/react-components/Breadcrumbs';
import {TemplateMessage} from '@servicenow/react-components/TemplateMessage';

// ── Typography ───────────────────────────────────────────────────────────────
import {RichText} from '@servicenow/react-components/RichText';
import {StylizedText} from '@servicenow/react-components/StylizedText';
import {TextLink} from '@servicenow/react-components/TextLink';
import {Illustration} from '@servicenow/react-components/Illustration';
import {Image as NowImage} from '@servicenow/react-components/Image';

// ── Static data ──────────────────────────────────────────────────────────────

const priorityItems = [
  {id: '1', label: 'Priority 1 - Critical'},
  {id: '2', label: 'Priority 2 - High'},
  {id: '3', label: 'Priority 3 - Moderate'},
  {id: '4', label: 'Priority 4 - Low'},
  {id: '5', label: 'Priority 5 - Planning'},
];

const statusItems = [
  {id: 'open', label: 'Open'},
  {id: 'in_progress', label: 'In Progress'},
  {id: 'on_hold', label: 'On Hold'},
  {id: 'resolved', label: 'Resolved'},
  {id: 'closed', label: 'Closed'},
];

const impactItems = [
  {id: 'low', label: 'Low'},
  {id: 'medium', label: 'Medium'},
  {id: 'high', label: 'High'},
];

const TAB_ITEMS = [
  {id: 'buttons', label: 'Buttons & Actions'},
  {id: 'inputs', label: 'Form Inputs'},
  {id: 'feedback', label: 'Feedback & Display'},
  {id: 'layout', label: 'Layout'},
  {id: 'navigation', label: 'Navigation'},
  {id: 'typography', label: 'Typography'},
];

// ── Styles ───────────────────────────────────────────────────────────────────

const ROW: React.CSSProperties = {
  display: 'flex',
  gap: '0.75rem',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const GRID2: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  marginTop: '1rem',
};

const GRID3: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1.5rem',
  marginTop: '1rem',
};

const SECTION: React.CSSProperties = {marginBottom: '1.5rem'};

// Card wrapper so margin doesn't go on the Card itself
function Section({children}: {children: React.ReactNode}) {
  return <div style={SECTION}><Card size="md">{children}</Card></div>;
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  // ── Tab ──────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = React.useState('buttons');

  // ── Buttons & Actions ────────────────────────────────────────────────────
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [dropdownSingle, setDropdownSingle] = React.useState<(string | number)[]>([]);
  const [dropdownMulti, setDropdownMulti] = React.useState<(string | number)[]>([]);

  // ── Layout ───────────────────────────────────────────────────────────────
  const [modalOpen, setModalOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  // ── Form Inputs ──────────────────────────────────────────────────────────
  const [inputValue, setInputValue] = React.useState('');
  const [urlValue, setUrlValue] = React.useState('');
  const [textareaValue, setTextareaValue] = React.useState('');
  const [selectedStatus, setSelectedStatus] = React.useState<string | number>('');
  const [typeaheadText, setTypeaheadText] = React.useState('');
  const [typeaheadId, setTypeaheadId] = React.useState<string | null>(null);
  // TypeaheadMultiSelectedItem extends DropdownItem — use any[] to avoid importing internal type
  const [multiSelected, setMultiSelected] = React.useState<any[]>([]);
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [subscribeChecked, setSubscribeChecked] = React.useState(false);
  const [toggleNotifs, setToggleNotifs] = React.useState(true);
  const [toggleAutoAssign, setToggleAutoAssign] = React.useState(false);
  const [radioSelected, setRadioSelected] = React.useState('medium');
  const [dateTimeValue, setDateTimeValue] = React.useState('');

  // ── Feedback ─────────────────────────────────────────────────────────────
  const [showInfo, setShowInfo] = React.useState(true);
  const [showWarning, setShowWarning] = React.useState(true);
  const [showCritical, setShowCritical] = React.useState(true);
  const [showPositive, setShowPositive] = React.useState(true);
  const [progress, setProgress] = React.useState(65);

  // ── Tooltip ref ───────────────────────────────────────────────────────────
  const tooltipRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{padding: '1.5rem', maxWidth: '1280px', margin: '0 auto'}}>

      {/* ── Page header ── */}
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.25rem'}}>
        <Heading label="ServiceNow HDS Component Showcase" level={1} variant="header-primary" hasNoMargin />
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.25rem'}}>
          <Avatar userName="Daniel Aagren Seehartrai Madsen" size="md" />
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
            <span style={{fontSize: '0.875rem', fontWeight: 600, color: 'var(--now-color--text-primary, #1a1a1a)', lineHeight: 1.2}}>
              Daniel Aagren Seehartrai Madsen
            </span>
            <HighlightedValue label="ServiceNow Rising Star 2025" color="positive" variant="primary" showIcon icon="star-fill" size="sm" />
          </div>
        </div>
      </div>
      <p style={{color: 'var(--now-color--text-secondary, #666)', marginBottom: '1.5rem', marginTop: '0.5rem'}}>
        Interactive gallery of Horizon Design System components from{' '}
        <code>@servicenow/react-components</code>
      </p>

      <Tabs
        items={TAB_ITEMS}
        selectedItem={activeTab}
        size="md"
        onSelectedItemSet={e => setActiveTab(e.detail.payload.value)}
      />

      <div style={{marginTop: '1.5rem'}}>

        {/* ══════════════════════════════════════════════════════════════════
            TAB 1  –  Buttons & Actions
        ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'buttons' && (
          <div>

            {/* Button variants */}
            <Section>
              <Heading label="Button — Variants" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{...ROW, marginTop: '1rem'}}>
                <Button label="Primary" variant="primary" onClicked={() => {}} />
                <Button label="Secondary" variant="secondary" onClicked={() => {}} />
                <Button label="Tertiary" variant="tertiary" onClicked={() => {}} />
                <Button label="Positive" variant="primary-positive" icon="check-fill" onClicked={() => {}} />
                <Button label="Destructive" variant="primary-negative" icon="trash-fill" onClicked={() => {}} />
                <Button label="Sec Positive" variant="secondary-positive" onClicked={() => {}} />
                <Button label="Sec Negative" variant="secondary-negative" onClicked={() => {}} />
                <Button label="Disabled" variant="primary" disabled />
              </div>
              <div style={{...ROW, marginTop: '0.75rem'}}>
                <Button label="Small" variant="secondary" size="sm" onClicked={() => {}} />
                <Button label="Medium" variant="secondary" size="md" onClicked={() => {}} />
                <Button label="Large" variant="secondary" size="lg" onClicked={() => {}} />
                <Button label="With icon" variant="secondary" icon="gear-fill" onClicked={() => {}} />
                <Button label="Tooltip" variant="tertiary" tooltipContent="Extra help text on hover" onClicked={() => {}} />
              </div>
            </Section>

            {/* ButtonBare, ButtonIconic, ButtonStateful */}
            <Section>
              <Heading label="ButtonBare / ButtonIconic / ButtonStateful" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />

              <div style={{marginTop: '1rem'}}>
                <p style={{fontSize: '0.8125rem', color: 'var(--now-color--text-secondary, #666)', marginBottom: '0.5rem'}}>
                  ButtonBare
                </p>
                <div style={ROW}>
                  <ButtonBare label="Settings" iconStart="gear-fill" onClicked={() => {}} />
                  <ButtonBare label="Learn more" variant="tertiary" onClicked={() => {}} />
                  <ButtonBare label="Disabled" iconStart="pencil-fill" disabled onClicked={() => {}} />
                </div>
              </div>

              <div style={{marginTop: '1rem'}}>
                <p style={{fontSize: '0.8125rem', color: 'var(--now-color--text-secondary, #666)', marginBottom: '0.5rem'}}>
                  ButtonIconic
                </p>
                <div style={ROW}>
                  <ButtonIconic icon="gear-fill" tooltipContent="Settings" onClicked={() => {}} />
                  <ButtonIconic icon="trash-fill" tooltipContent="Delete record" variant="tertiary" onClicked={() => {}} />
                  <ButtonIconic icon="plus-fill" tooltipContent="Add item" size="sm" onClicked={() => {}} />
                  <ButtonIconic icon="bell-fill" tooltipContent="Notifications" onClicked={() => {}} />
                  <ButtonIconic icon="magnifying-glass-fill" tooltipContent="Search" onClicked={() => {}} />
                  <ButtonIconic icon="pencil-fill" tooltipContent="Edit" size="lg" onClicked={() => {}} />
                </div>
              </div>

              <div style={{marginTop: '1rem'}}>
                <p style={{fontSize: '0.8125rem', color: 'var(--now-color--text-secondary, #666)', marginBottom: '0.5rem'}}>
                  ButtonStateful (click to toggle)
                </p>
                <div style={ROW}>
                  <ButtonStateful
                    icon="star-fill"
                    selected={isFavorite}
                    tooltipContent={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    onSelectedSet={e => setIsFavorite(e.detail.payload.value)}
                  />
                  <ButtonStateful
                    icon="bookmark-fill"
                    selected={isBookmarked}
                    tooltipContent={isBookmarked ? 'Remove bookmark' : 'Bookmark this record'}
                    onSelectedSet={e => setIsBookmarked(e.detail.payload.value)}
                  />
                  <span style={{fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    Favorite: <strong>{isFavorite ? 'Yes' : 'No'}</strong>
                    &nbsp;|&nbsp;
                    Bookmarked: <strong>{isBookmarked ? 'Yes' : 'No'}</strong>
                  </span>
                </div>
              </div>
            </Section>

            {/* SplitButton & Dropdown */}
            <Section>
              <Heading label="SplitButton & Dropdown" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{...ROW, marginTop: '1rem', alignItems: 'flex-start'}}>

                <SplitButton
                  label="Save"
                  variant="primary"
                  items={[
                    {id: 'save-draft', label: 'Save as Draft'},
                    {id: 'save-close', label: 'Save and Close'},
                    {id: 'save-new', label: 'Save and New'},
                  ]}
                  onActionClicked={() => {}}
                  onItemClicked={() => {}}
                />

                {/* Single-select Dropdown */}
                <Dropdown
                  placeholder="Select status"
                  items={statusItems}
                  select="single"
                  selectedItems={dropdownSingle}
                  variant="secondary"
                  onSelectedItemsSet={e => setDropdownSingle(e.detail.payload.value)}
                />

                {/* Multi-select Dropdown */}
                <Dropdown
                  placeholder="Select priorities"
                  items={priorityItems}
                  select="multi"
                  selectedItems={dropdownMulti}
                  variant="secondary"
                  onSelectedItemsSet={e => setDropdownMulti(e.detail.payload.value)}
                />

                {/* Action menu */}
                <Dropdown
                  placeholder="Actions"
                  items={[
                    {id: 'edit', label: 'Edit', icon: 'pencil-fill'},
                    {id: 'duplicate', label: 'Duplicate', icon: 'flag-fill'},
                    {id: 'delete', label: 'Delete', icon: 'trash-fill'},
                  ]}
                  select="none"
                  variant="tertiary"
                  onItemClicked={() => {}}
                />
              </div>

              {/* Grouped Dropdown */}
              <div style={{...ROW, marginTop: '1rem'}}>
                <Dropdown
                  placeholder="Select by category"
                  items={[
                    {
                      id: 'priority-group',
                      label: 'Priority',
                      children: priorityItems,
                    },
                    {
                      id: 'status-group',
                      label: 'Status',
                      children: statusItems,
                    },
                  ]}
                  select="single"
                  selectedItems={[]}
                  variant="secondary"
                  onSelectedItemsSet={() => {}}
                />
                <span style={{fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                  ← Grouped dropdown with section headers
                </span>
              </div>
            </Section>

          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            TAB 2  –  Form Inputs
        ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'inputs' && (
          <div>

            {/* Text inputs */}
            <Section>
              <Heading label="Input & InputUrl" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={GRID2}>
                <Input
                  label="Short Description"
                  type="text"
                  placeholder="Describe the issue..."
                  required
                  value={inputValue}
                  onValueSet={e => setInputValue(e.detail.payload.value)}
                />
                <InputUrl
                  label="Reference URL"
                  value={urlValue}
                  onValueSet={e => setUrlValue(e.detail.payload.value)}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="user@example.com"
                  messages={[{status: 'info', content: 'Notifications will be sent here', icon: 'circle-info-outline'}]}
                  onValueSet={() => {}}
                />
                <Input
                  label="Task Count"
                  type="number"
                  min={0}
                  max={100}
                  onValueSet={() => {}}
                />
                <Input
                  label="Read-only Field"
                  value="INC0001234"
                  readonly
                  onValueSet={() => {}}
                />
                <Input
                  label="Disabled Field"
                  value="Cannot edit"
                  disabled
                  onValueSet={() => {}}
                />
              </div>
            </Section>

            {/* Textarea */}
            <Section>
              <Heading label="Textarea" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <Textarea
                  label="Description"
                  placeholder="Enter a detailed description of the issue..."
                  rows={4}
                  maxlength={2000}
                  value={textareaValue}
                  onValueSet={e => setTextareaValue(e.detail.payload.value)}
                />
              </div>
            </Section>

            {/* Select, Typeahead, TypeaheadMulti, DateTime */}
            <Section>
              <Heading label="Select / Typeahead / TypeaheadMulti / DateTime" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={GRID2}>
                <Select
                  label="Status"
                  items={statusItems}
                  selectedItem={selectedStatus}
                  required
                  search="contains"
                  helperContent="Select the current state of the incident"
                  onSelectedItemSet={e => setSelectedStatus(e.detail.payload.value)}
                />
                <Typeahead
                  label="Priority"
                  items={priorityItems}
                  value={typeaheadText}
                  selectedItem={typeaheadId}
                  search="contains"
                  placeholder="Search priorities..."
                  onValueSet={e => setTypeaheadText(e.detail.payload.value)}
                  onSelectedItemSet={e => {
                    setTypeaheadText(e.detail.payload.item?.label ?? '');
                    setTypeaheadId(String(e.detail.payload.value));
                  }}
                />
                <TypeaheadMulti
                  label="Categories / Tags"
                  items={priorityItems}
                  selectedItems={multiSelected as any}
                  manageSelectedItems
                  search="contains"
                  placeholder="Add tags..."
                  onSelectedItemsSet={e => setMultiSelected(e.detail.payload.value as any[])}
                />
                <DateTime
                  label="Scheduled Date & Time"
                  type="date-time"
                  format="yyyy-MM-dd HH:mm:ss"
                  value={dateTimeValue}
                  onValueSet={e => setDateTimeValue(e.detail.payload.value ?? '')}
                />
              </div>
            </Section>

            {/* Checkbox, Toggle, RadioButtons */}
            <Section>
              <Heading label="Checkbox / Toggle / RadioButtons" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={GRID3}>
                {/* Checkboxes */}
                <div>
                  <p style={{fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.75rem'}}>Checkbox</p>
                  <Checkbox
                    label="Accept terms and conditions"
                    checked={checkboxChecked}
                    manageChecked
                    required
                    onCheckedSet={e => setCheckboxChecked(e.detail.payload.value)}
                  />
                  <div style={{marginTop: '0.5rem'}}>
                    <Checkbox
                      label="Subscribe to email updates"
                      checked={subscribeChecked}
                      manageChecked
                      onCheckedSet={e => setSubscribeChecked(e.detail.payload.value)}
                    />
                  </div>
                  <div style={{marginTop: '0.5rem'}}>
                    <Checkbox
                      label="Indeterminate state"
                      checked="indeterminate"
                      manageChecked
                      onCheckedSet={() => {}}
                    />
                  </div>
                  <div style={{marginTop: '0.5rem'}}>
                    <Checkbox
                      label="Disabled option"
                      checked={false}
                      disabled
                      manageChecked
                      onCheckedSet={() => {}}
                    />
                  </div>
                </div>

                {/* Toggles */}
                <div>
                  <p style={{fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.75rem'}}>Toggle</p>
                  <Toggle
                    label="Enable notifications"
                    checked={toggleNotifs}
                    labelPosition="start"
                    manageChecked
                    onCheckedSet={e => setToggleNotifs(e.detail.payload.value)}
                  />
                  <div style={{marginTop: '0.75rem'}}>
                    <Toggle
                      label="Auto-assign to group"
                      checked={toggleAutoAssign}
                      labelPosition="start"
                      manageChecked
                      onCheckedSet={e => setToggleAutoAssign(e.detail.payload.value)}
                    />
                  </div>
                  <div style={{marginTop: '0.75rem'}}>
                    <Toggle
                      label="Archived (disabled)"
                      checked={false}
                      disabled
                      labelPosition="start"
                      manageChecked
                      onCheckedSet={() => {}}
                    />
                  </div>
                  <div style={{marginTop: '0.75rem'}}>
                    <Toggle
                      label="Small variant"
                      checked={true}
                      size="sm"
                      labelPosition="start"
                      manageChecked
                      onCheckedSet={() => {}}
                    />
                  </div>
                </div>

                {/* RadioButtons */}
                <RadioButtons
                  label="Impact"
                  name="impact"
                  options={impactItems}
                  value={radioSelected}
                  required
                  onValueSet={e => setRadioSelected(String(e.detail.payload.value))}
                />
              </div>
            </Section>

          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            TAB 3  –  Feedback & Display
        ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'feedback' && (
          <div>

            {/* Alerts */}
            <Section>
              <Heading label="Alert" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem'}}>
                {showInfo && (
                  <Alert
                    status="info"
                    header="Information"
                    content="Your record has been saved successfully."
                    action={{type: 'dismiss'}}
                    onActionClicked={() => setShowInfo(false)}
                  />
                )}
                {showWarning && (
                  <Alert
                    status="warning"
                    header="Warning"
                    content="This action will affect related records. Please review before continuing."
                    action={{type: 'acknowledge', label: 'I understand'}}
                    onActionClicked={() => setShowWarning(false)}
                  />
                )}
                {showCritical && (
                  <Alert
                    status="critical"
                    header="Error"
                    content="Failed to connect to the remote service. Check your network connection and try again."
                    action={{type: 'dismiss'}}
                    onActionClicked={() => setShowCritical(false)}
                  />
                )}
                {showPositive && (
                  <Alert
                    status="positive"
                    header="Success"
                    content="Incident INC0001234 has been resolved and closed."
                    action={{type: 'dismiss'}}
                    onActionClicked={() => setShowPositive(false)}
                  />
                )}
                {(!showInfo || !showWarning || !showCritical || !showPositive) && (
                  <Button
                    label="Reset all alerts"
                    variant="secondary"
                    size="sm"
                    onClicked={() => {
                      setShowInfo(true);
                      setShowWarning(true);
                      setShowCritical(true);
                      setShowPositive(true);
                    }}
                  />
                )}
              </div>
            </Section>

            {/* Badges */}
            <Section>
              <Heading label="Badge" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{...ROW, marginTop: '1rem'}}>
                <Badge value={5} color="critical" />
                <Badge value={12} color="high" />
                <Badge value={8} color="warning" />
                <Badge value={42} color="info" />
                <Badge value={7} color="positive" />
                <Badge value={0} color="low" />
                <Badge value={3} color="moderate" />
                <Badge value={99} character="+" color="purple" />
                <Badge value={1500} round color="teal" />
                <Badge value={2} color="magenta" />
                <Badge value={14} color="orange" size="lg" />
                <Badge value={4} color="green" variant="secondary" />
              </div>
            </Section>

            {/* Loader & ProgressBar */}
            <Section>
              <Heading label="Loader & ProgressBar" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                <div style={ROW}>
                  <Loader label="Loading records..." />
                </div>
                <div>
                  <ProgressBar value={progress} max={100} label={`Upload progress: ${progress}%`} />
                  <div style={{...ROW, marginTop: '0.75rem'}}>
                    <Button label="−10" variant="secondary" size="sm" onClicked={() => setProgress(p => Math.max(0, p - 10))} />
                    <Button label="+10" variant="primary" size="sm" onClicked={() => setProgress(p => Math.min(100, p + 10))} />
                    <span style={{fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                      Current: {progress}%
                    </span>
                  </div>
                </div>
              </div>
            </Section>

            {/* Tooltip */}
            <Section>
              <Heading label="Tooltip" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <button
                  ref={tooltipRef}
                  style={{
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    border: '1px solid var(--now-color--border-base, #d3d3d3)',
                    borderRadius: '4px',
                    background: 'var(--now-color--surface-neutral, #f5f5f5)',
                  }}
                >
                  Hover me
                </button>
                <Tooltip
                  targetRef={tooltipRef.current}
                  content="This tooltip is rendered by the HDS Tooltip component"
                  position={['top-center bottom-center', 'bottom-center top-center']}
                />
                <span style={{fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                  ← Hover the button to see the tooltip
                </span>
              </div>
            </Section>

            {/* Typography */}
            <Section>
              <Heading label="Heading Variants" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                <Heading label="header-hero" level={2} variant="header-hero" hasNoMargin />
                <Heading label="header-primary" level={2} variant="header-primary" hasNoMargin />
                <Heading label="header-secondary" level={3} variant="header-secondary" hasNoMargin />
                <Heading label="header-tertiary" level={4} variant="header-tertiary" hasNoMargin />
                <Heading label="title-primary" level={5} variant="title-primary" hasNoMargin />
                <Heading label="title-secondary" level={5} variant="title-secondary" hasNoMargin />
                <Heading label="title-tertiary" level={6} variant="title-tertiary" hasNoMargin />
              </div>
            </Section>

            {/* LabelValue / LabelValueStacked / HighlightedValue */}
            <Section>
              <Heading label="LabelValue / LabelValueStacked / HighlightedValue" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <LabelValue label="Assigned to" value="Alice Johnson" />
                <LabelValueStacked
                  items={[
                    {label: 'Number', value: 'INC0001234'},
                    {label: 'State', value: 'In Progress'},
                    {label: 'Priority', value: 'P2 - High'},
                    {label: 'Assignment group', value: 'Service Desk'},
                    {label: 'Category', value: 'Network'},
                    {label: 'Opened', value: '2026-03-29 09:00:00'},
                  ]}
                />
                <div style={ROW}>
                  <HighlightedValue label="P1" color="critical" size="sm" />
                  <HighlightedValue label="Active" color="positive" size="md" />
                  <HighlightedValue label="Pending" color="warning" />
                  <HighlightedValue label="On Hold" color="info" />
                  <HighlightedValue label="Closed" color="low" />
                  <HighlightedValue label="Draft" color="moderate" />
                </div>
              </div>
            </Section>

            {/* Avatar & Icon */}
            <Section>
              <Heading label="Avatar & Icon" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                <div style={ROW}>
                  <Avatar userName="Alice Johnson" presence="available" size="lg" />
                  <Avatar userName="Bob Smith" presence="busy" size="lg" />
                  <Avatar userName="Carol Davis" presence="away" size="lg" />
                  <Avatar userName="Dan Moore" presence="offline" size="lg" />
                  <Avatar userName="Eve Wilson" size="md" />
                  <Avatar userName="Frank Lee" size="sm" />
                </div>
                <div style={ROW}>
                  <Icon icon="gear-fill" size="md" />
                  <Icon icon="flag-fill" size="md" />
                  <Icon icon="check-fill" size="md" />
                  <Icon icon="trash-fill" size="md" />
                  <Icon icon="pencil-fill" size="md" />
                  <Icon icon="bell-fill" size="md" />
                  <Icon icon="magnifying-glass-fill" size="md" />
                  <Icon icon="star-fill" size="md" />
                  <Icon icon="home-fill" size="md" />
                  <Icon icon="user-fill" size="md" />
                  <Icon icon="plus-fill" size="md" />
                  <Icon icon="bookmark-fill" size="md" />
                </div>
              </div>
            </Section>

          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            TAB 4  –  Layout
        ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'layout' && (
          <div>

            {/* Accordion */}
            <Section>
              <Heading label="Accordion / AccordionItem" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <Accordion headingLevel={4} expandSingle size="md">

                  <AccordionItem header="Incident Details" expanded>
                    <div slot="content">
                      <LabelValueStacked
                        items={[
                          {label: 'Number', value: 'INC0001234'},
                          {label: 'State', value: 'In Progress'},
                          {label: 'Priority', value: 'P2 - High'},
                        ]}
                      />
                    </div>
                  </AccordionItem>

                  <AccordionItem header="Assignment Information">
                    <div slot="content">
                      <LabelValueStacked
                        items={[
                          {label: 'Assigned to', value: 'Alice Johnson'},
                          {label: 'Assignment group', value: 'Service Desk'},
                        ]}
                      />
                    </div>
                  </AccordionItem>

                  <AccordionItem
                    header="Resolution"
                    caption="Status: Resolved"
                  >
                    <Icon icon="check-fill" slot="identifier" />
                    <HighlightedValue slot="metadata" label="Resolved" color="positive" size="sm" />
                    <div slot="content">
                      <p style={{margin: 0}}>Resolution notes will appear here once the incident is closed.</p>
                    </div>
                  </AccordionItem>

                  <AccordionItem header="Archive (disabled)" disabled>
                    <div slot="content">
                      <p style={{margin: 0}}>This section is locked for archived records.</p>
                    </div>
                  </AccordionItem>

                </Accordion>
              </div>
            </Section>

            {/* Card variants */}
            <Section>
              <Heading label="Card — Sidebar Colors" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
                <Card size="sm" sidebar={{color: 'critical', variant: 'primary'}}>
                  <Heading label="P1 — Critical" level={5} variant="title-secondary" hasNoMargin />
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    Server unreachable
                  </p>
                </Card>
                <Card size="sm" sidebar={{color: 'high', variant: 'primary'}}>
                  <Heading label="P2 — High" level={5} variant="title-secondary" hasNoMargin />
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    Application latency
                  </p>
                </Card>
                <Card size="sm" sidebar={{color: 'warning', variant: 'primary'}}>
                  <Heading label="P3 — Moderate" level={5} variant="title-secondary" hasNoMargin />
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    Disk space warning
                  </p>
                </Card>
                <Card size="sm" sidebar={{color: 'info', variant: 'primary'}}>
                  <Heading label="P4 — Low" level={5} variant="title-secondary" hasNoMargin />
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    Software request
                  </p>
                </Card>
                <Card size="sm" sidebar={{color: 'positive', variant: 'primary'}}>
                  <Heading label="Resolved" level={5} variant="title-secondary" hasNoMargin />
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    All systems operational
                  </p>
                </Card>
                <Card size="sm" sidebar={{color: 'low', variant: 'secondary'}}>
                  <Heading label="Closed" level={5} variant="title-secondary" hasNoMargin />
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--now-color--text-secondary, #666)'}}>
                    No further action needed
                  </p>
                </Card>
              </div>
            </Section>

            {/* Collapse */}
            <Section>
              <Heading label="Collapse" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <Button
                  label={collapseOpen ? 'Hide advanced options' : 'Show advanced options'}
                  variant="tertiary"
                  icon="gear-fill"
                  size="sm"
                  onClicked={() => setCollapseOpen(o => !o)}
                />
                <Collapse expanded={collapseOpen}>
                  <div style={{
                    padding: '1rem',
                    background: 'var(--now-color--surface-neutral, #f5f5f5)',
                    borderRadius: '4px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                  }}>
                    <Input label="Custom routing key" type="text" placeholder="e.g. IT-DESK-123" onValueSet={() => {}} />
                    <Select
                      label="Override group"
                      items={statusItems}
                      selectedItem=""
                      onSelectedItemSet={() => {}}
                    />
                  </div>
                </Collapse>
              </div>
            </Section>

            {/* Modal */}
            <Section>
              <Heading label="Modal" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <Button
                  label="Open Modal"
                  variant="primary"
                  icon="list-fill"
                  onClicked={() => setModalOpen(true)}
                />
              </div>
              <Modal
                opened={modalOpen}
                size="md"
                headerLabel="Resolve Incident"
                footerActions={[
                  {label: 'Cancel', variant: 'secondary'},
                  {label: 'Resolve', variant: 'primary-positive'},
                ]}
                onOpenedSet={e => setModalOpen(e.detail.payload.value)}
                onFooterActionClicked={() => setModalOpen(false)}
              >
                <div style={{padding: '1rem'}}>
                  <Alert
                    status="warning"
                    header="Before you resolve"
                    content="Make sure all work notes and a resolution code have been filled in."
                    action={{type: 'dismiss'}}
                    onActionClicked={() => {}}
                  />
                  <div style={{marginTop: '1rem'}}>
                    <Select
                      label="Resolution code"
                      items={[
                        {id: 'solved', label: 'Solved (permanently)'},
                        {id: 'workaround', label: 'Solved (workaround)'},
                        {id: 'not_solved', label: 'Not solved'},
                      ]}
                      selectedItem=""
                      required
                      onSelectedItemSet={() => {}}
                    />
                  </div>
                  <div style={{marginTop: '1rem'}}>
                    <Textarea
                      label="Resolution notes"
                      placeholder="Describe the steps taken to resolve the incident..."
                      rows={3}
                      required
                      onValueSet={() => {}}
                    />
                  </div>
                </div>
              </Modal>
            </Section>

          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            TAB 5  –  Navigation
        ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'navigation' && (
          <div>

            <Section>
              <Heading label="Breadcrumbs" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Breadcrumbs
                  items={[
                    {label: 'Home', href: '/'},
                    {label: 'Service Desk', href: '/service-desk'},
                    {label: 'Incidents', href: '/incidents'},
                    {label: 'INC0001234'},
                  ]}
                />
                <Breadcrumbs
                  items={[
                    {label: 'CMDB', href: '/cmdb'},
                    {label: 'Servers', href: '/cmdb/servers'},
                    {label: 'web-prod-01'},
                  ]}
                />
              </div>
            </Section>

            <Section>
              <Heading label="TemplateMessage — Empty States" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <TemplateMessage
                  illustration="no-search-results"
                  heading={{label: 'No matching records found'}}
                  content="Try adjusting your search filters or create a new incident to get started."
                  actions={[
                    {label: 'Clear Filters', variant: 'secondary'},
                    {label: 'Create Incident', variant: 'primary'},
                  ]}
                  onActionClicked={() => {}}
                />
              </div>
            </Section>

            <Section>
              <Heading label="ContentTree" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <TemplateMessage
                  illustration="unconfigured"
                  heading={{label: 'ContentTree requires a live instance'}}
                  content="ContentTree renders hierarchical ServiceNow data (e.g. asset trees, org charts). Deploy this app to a ServiceNow instance to see a live navigation tree."
                />
              </div>
            </Section>

          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            TAB 6  –  Typography
        ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'typography' && (
          <div>

            {/* Headings */}
            <Section>
              <Heading label="Heading — All Levels & Variants" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem'}}>
                <Heading label="header-primary — Page Title" level={1} variant="header-primary" />
                <Heading label="header-secondary — Section Title" level={2} variant="header-secondary" />
                <Heading label="title-primary — Card Title" level={3} variant="title-primary" />
                <Heading label="title-secondary — Sub-section" level={4} variant="title-secondary" />
                <Heading label="title-tertiary — Helper label" level={5} variant="title-tertiary" />
              </div>
            </Section>

            {/* RichText */}
            <Section>
              <Heading label="RichText — Safe HTML Rendering" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem'}}>
                <RichText html="<p>Use <strong>RichText</strong> to render <em>safe HTML</em> content — scripts and inline JS are stripped automatically.</p><ul><li>Supports lists</li><li>Supports <a href='#'>links</a></li><li>Supports <code>inline code</code></li></ul>" />
              </div>
            </Section>

            {/* StylizedText */}
            <Section>
              <Heading label="StylizedText" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem'}}>
                <StylizedText content="This is **bold** and *italic* text rendered via StylizedText." />
                <StylizedText content="Inline `code` is supported: `GlideRecord.get(table, sysId)`" />
                <StylizedText content="Lists work too:\n- Item one\n- Item two\n- Item three" />
              </div>
            </Section>

            {/* TextLink */}
            <Section>
              <Heading label="TextLink" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem'}}>
                <div>
                  <span style={{fontSize: '0.9375rem'}}>Open the </span>
                  <TextLink label="ServiceNow Developer Portal" href="https://developer.servicenow.com" opensWindow />
                  <span style={{fontSize: '0.9375rem'}}> for documentation and resources.</span>
                </div>
                <div>
                  <TextLink label="View incident INC0001234" href="/nav_to.do?uri=incident.do" iconEnd="arrow-right-fill" />
                </div>
                <div>
                  <TextLink label="Secondary variant link" href="#" variant="secondary" underlined />
                </div>
              </div>
            </Section>

            {/* HighlightedValue */}
            <Section>
              <Heading label="HighlightedValue — Color-coded Labels" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <p style={{fontSize: '0.8125rem', color: 'var(--now-color--text-secondary, #666)', margin: '1rem 0 0.75rem'}}>
                Colored pill labels for status, priority, and classification:
              </p>
              <div style={{...ROW}}>
                <HighlightedValue label="Critical" color="critical" variant="primary" showIcon />
                <HighlightedValue label="High" color="high" variant="primary" showIcon />
                <HighlightedValue label="Moderate" color="warning" variant="primary" showIcon />
                <HighlightedValue label="Low" color="low" variant="primary" showIcon />
                <HighlightedValue label="Positive" color="positive" variant="primary" showIcon />
                <HighlightedValue label="Info" color="info" variant="primary" showIcon />
              </div>
              <div style={{...ROW, marginTop: '0.75rem'}}>
                <HighlightedValue label="Critical" color="critical" variant="secondary" />
                <HighlightedValue label="High" color="high" variant="secondary" />
                <HighlightedValue label="Moderate" color="warning" variant="secondary" />
                <HighlightedValue label="Positive" color="positive" variant="secondary" />
              </div>
              <div style={{...ROW, marginTop: '0.75rem'}}>
                <HighlightedValue label="Critical" color="critical" variant="tertiary" />
                <HighlightedValue label="High" color="high" variant="tertiary" />
                <HighlightedValue label="Moderate" color="warning" variant="tertiary" />
                <HighlightedValue label="Positive" color="positive" variant="tertiary" />
              </div>
            </Section>

            {/* Illustration */}
            <Section>
              <Heading label="Illustration — Built-in SVG Assets" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem', alignItems: 'flex-end'}}>
                {(['no-search-results', 'no-data', 'error', 'completed-tasks', 'add-attachment', 'first-time-user', 'unconfigured'] as const).map(name => (
                  <div key={name} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                    <Illustration illustration={name} size="sm" alt={name} />
                    <span style={{fontSize: '0.75rem', color: 'var(--now-color--text-secondary, #666)'}}>{name}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Image */}
            <Section>
              <Heading label="Image — Responsive" level={3} variant="title-secondary" hasNoMargin />
              <CardDivider />
              <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <NowImage
                  src="https://placehold.co/480x200/e8f4fd/1a6ea8?text=now-image+component"
                  alt="Placeholder demonstrating the Image component"
                  style={{maxWidth: '480px', borderRadius: '8px'}}
                />
                <p style={{fontSize: '0.8125rem', color: 'var(--now-color--text-secondary, #666)', margin: 0}}>
                  The <code>Image</code> component wraps <code>now-image</code> with responsive source support,
                  click events, and accessible alt text.
                </p>
              </div>
            </Section>

          </div>
        )}

      </div>
    </div>
  );
}
